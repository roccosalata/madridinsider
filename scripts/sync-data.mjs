#!/usr/bin/env node
/**
 * sync-data.mjs
 *
 * Mirrors the canonical content database (roccosalata/madridinsider-data)
 * into this repo's data/ directory. Run this before every build to keep
 * the data here in sync with the source of truth.
 *
 * Usage:
 *   npm run sync-data                  # uses default source repo
 *   SYNC_DATA_REPO=other/repo npm run sync-data
 *
 * The script:
 *   1. Clones (or fetches) the data repo at the default branch
 *   2. Copies data/categories.json, data/records.json (and any other
 *      data/*.json) into ./data/
 *   3. Validates the JSON and the records schema (required fields,
 *      unique IDs, valid categories, valid related_records, etc.)
 *   4. Bails with a non-zero exit code on any validation failure
 *
 * No GitHub token is required because the data repo is public.
 */

import { execSync } from 'node:child_process'
import { readFileSync, writeFileSync, copyFileSync, mkdirSync, existsSync, rmSync } from 'node:fs'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const DATA_REPO = process.env.SYNC_DATA_REPO || 'roccosalata/madridinsider-data'
const DATA_DIR = join(ROOT, 'data')
const WORK = join(ROOT, '.data-cache')

function sh(cmd, opts = {}) {
  return execSync(cmd, { stdio: ['ignore', 'pipe', 'pipe'], encoding: 'utf8', ...opts })
}

function logStep(msg) {
  console.log(`\n▸ ${msg}`)
}

function fail(msg) {
  console.error(`\n✗ ${msg}`)
  process.exit(1)
}

// ---------- 1. Clone or update the data repo ----------
logStep(`Syncing from ${DATA_REPO} (public, default branch)…`)

if (existsSync(WORK)) {
  rmSync(WORK, { recursive: true, force: true })
}
mkdirSync(WORK, { recursive: true })

try {
  sh(`git clone --depth 1 https://github.com/${DATA_REPO}.git ${WORK}`)
} catch (err) {
  fail(`Could not clone ${DATA_REPO}. ${err.message}`)
}

const REMOTE_DATA = join(WORK, 'data')
if (!existsSync(REMOTE_DATA)) {
  fail(`Cloned repo has no data/ directory at expected path`)
}

// ---------- 2. Copy data files into this repo's data/ ----------
logStep('Copying data files into ./data/')

const filesToCopy = ['categories.json', 'records.json', 'events.json', 'quickAccess.json']
let copied = 0
for (const f of filesToCopy) {
  const src = join(REMOTE_DATA, f)
  const dst = join(DATA_DIR, f)
  if (!existsSync(src)) {
    console.log(`  · ${f} (not present in source — skipped)`)
    continue
  }
  copyFileSync(src, dst)
  console.log(`  ✓ ${f}`)
  copied++
}

if (copied === 0) {
  fail('No data files were copied. Aborting.')
}

// ---------- 3. Validate JSON + records schema ----------
logStep('Validating JSON and records schema…')

let categories, records
try {
  categories = JSON.parse(readFileSync(join(DATA_DIR, 'categories.json'), 'utf8'))
  records = JSON.parse(readFileSync(join(DATA_DIR, 'records.json'), 'utf8'))
} catch (err) {
  fail(`JSON parse error: ${err.message}`)
}

if (!Array.isArray(categories) || categories.length === 0) {
  fail('categories.json must be a non-empty array')
}
if (!Array.isArray(records)) {
  fail('records.json must be an array')
}

// Build valid (category, subcategory) set
const validPairs = new Set()
for (const cat of categories) {
  if (!cat.id || !cat.title) fail(`category missing id or title`)
  for (const sub of cat.subcategories ?? []) {
    if (!sub.id || !sub.title) fail(`subcategory in ${cat.id} missing id or title`)
    validPairs.add(`${cat.id}|${sub.id}`)
  }
}

// Required fields
const REQUIRED = [
  'id', 'category', 'subcategory', 'title', 'summary', 'content',
  'last_updated', 'status', 'official_url', 'english_friendly', 'related_records'
]
const VALID_STATUS = new Set(['evergreen', 'annual review', 'dynamic', 'legacy', 'archived'])
const VALID_ENGLISH_LEVELS = new Set([
  'english-primary', 'english-available', 'english-partial', 'spanish-only'
])
const URL_RE = /^https?:\/\/\S+$/i
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/

// Pass 1: collect IDs, check required fields and per-record shape.
const ids = new Set()
const errors = []

// Optional `sections` validation. Each section is one of:
//   text|callout|stats|checklist|list|steps|do_dont|table
const VALID_SECTION_TYPES = new Set([
  'text', 'callout', 'stats', 'checklist', 'list', 'steps', 'do_dont', 'table'
])
const VALID_TONES = new Set(['info', 'warning', 'success', 'danger'])

function validateSections(recId, sections) {
  if (sections === undefined) return
  if (!Array.isArray(sections)) {
    errors.push(`${recId}: sections must be an array`)
    return
  }
  sections.forEach((s, i) => {
    const ctx = `${recId}.sections[${i}]`
    if (!s || typeof s !== 'object') { errors.push(`${ctx}: not an object`); return }
    if (!s.type || !VALID_SECTION_TYPES.has(s.type)) {
      errors.push(`${ctx}: invalid or missing type "${s.type ?? ''}"`)
      return
    }
    if (typeof s.heading !== 'string' || !s.heading.trim()) {
      errors.push(`${ctx}: missing heading`)
    }
    switch (s.type) {
      case 'text':
      case 'callout':
        if (typeof s.body !== 'string') errors.push(`${ctx}: ${s.type} requires string body`)
        if (s.type === 'callout' && s.tone && !VALID_TONES.has(s.tone)) {
          errors.push(`${ctx}: invalid tone "${s.tone}"`)
        }
        break
      case 'stats':
        if (!Array.isArray(s.items)) { errors.push(`${ctx}: stats requires items[]`); break }
        s.items.forEach((it, j) => {
          if (!it || typeof it.label !== 'string' || typeof it.value !== 'string')
            errors.push(`${ctx}.items[${j}]: must have string label and value`)
        })
        break
      case 'checklist':
      case 'list':
        if (!Array.isArray(s.items)) { errors.push(`${ctx}: ${s.type} requires items[]`); break }
        s.items.forEach((it, j) => {
          if (!it || typeof it.title !== 'string')
            errors.push(`${ctx}.items[${j}]: must have string title`)
          if (it.body !== undefined && typeof it.body !== 'string')
            errors.push(`${ctx}.items[${j}]: body must be a string`)
          if (it.meta !== undefined && !Array.isArray(it.meta))
            errors.push(`${ctx}.items[${j}]: meta must be a string array`)
        })
        break
      case 'steps':
        if (!Array.isArray(s.items)) { errors.push(`${ctx}: steps requires items[]`); break }
        s.items.forEach((it, j) => {
          if (!it || typeof it.title !== 'string' || typeof it.body !== 'string')
            errors.push(`${ctx}.items[${j}]: must have string title and body`)
          if (it.tip !== undefined && typeof it.tip !== 'string')
            errors.push(`${ctx}.items[${j}]: tip must be a string`)
        })
        break
      case 'do_dont':
        if (!Array.isArray(s.do) || !Array.isArray(s.dont))
          errors.push(`${ctx}: do_dont requires string arrays do[] and dont[]`)
        break
      case 'table':
        if (!Array.isArray(s.columns) || !Array.isArray(s.rows))
          errors.push(`${ctx}: table requires columns[] and rows[][]`)
        break
    }
  })
}

for (const r of records) {
  for (const f of REQUIRED) {
    if (!(f in r)) errors.push(`${r.id ?? '?'}: missing field ${f}`)
  }
  if (r.id) {
    if (ids.has(r.id)) errors.push(`${r.id}: duplicate id`)
    ids.add(r.id)
  }
  if (r.category && !validPairs.has(`${r.category}|${r.subcategory}`)) {
    errors.push(`${r.id}: invalid (category, subcategory) = (${r.category}, ${r.subcategory})`)
  }
  if (r.status && !VALID_STATUS.has(r.status)) {
    errors.push(`${r.id}: invalid status "${r.status}"`)
  }
  // Optional english_level (added 2026-07-20). 4-tier system.
  if (r.english_level !== undefined && !VALID_ENGLISH_LEVELS.has(r.english_level)) {
    errors.push(`${r.id}: invalid english_level "${r.english_level}" — must be one of english-primary, english-available, english-partial, spanish-only`)
  }
  // If english_level is set, english_friendly must be consistent:
  // tiers 1-3 → true, tier 4 (spanish-only) → false.
  if (r.english_level !== undefined) {
    const expectedFriendly = r.english_level !== 'spanish-only'
    if (r.english_friendly !== expectedFriendly) {
      errors.push(`${r.id}: english_friendly=${r.english_friendly} but english_level="${r.english_level}" — these must be consistent`)
    }
  }
  if (r.official_url && !URL_RE.test(r.official_url)) {
    errors.push(`${r.id}: invalid official_url "${r.official_url}"`)
  }
  if (r.last_updated && !DATE_RE.test(r.last_updated)) {
    errors.push(`${r.id}: invalid last_updated "${r.last_updated}"`)
  }
  // Optional structured-content sections (added 2026-07-20).
  validateSections(r.id, r.sections)
}

// Pass 2: now that all IDs are known, check related_records references.
for (const r of records) {
  for (const rel of r.related_records ?? []) {
    if (!ids.has(rel)) {
      errors.push(`${r.id}: related_records references unknown id "${rel}"`)
    }
  }
}

if (errors.length) {
  console.error('\n✗ Validation errors:')
  for (const e of errors) console.error('   - ' + e)
  fail(`${errors.length} validation error(s). Sync aborted — fix the data and retry.`)
}

// ---------- 4. Golden Records check ----------
const golden = [
  'metro-de-madrid', 'madrid-barajas-airport', 'atocha-station', 'puerta-del-sol',
  'museo-del-prado', 'retiro-park', 'royal-palace', 'plaza-mayor', 'gran-via',
  'toledo', 'segovia', 'el-escorial', 'left-luggage', 'english-speaking-doctors',
  'nie-tie', 'housing', 'healthcare', 'banking', 'universities', 'flamenco',
  'real-madrid-bernabeu', 'mercado-san-miguel',
  'veranos-de-la-villa', 'madrid-pride'
]
const missingGolden = golden.filter((g) => !ids.has(g))
if (missingGolden.length) {
  fail(`Missing Golden Records: ${missingGolden.join(', ')}`)
}

console.log(`\n✓ Synced ${copied} data files. ${records.length} records, ${categories.length} categories. All 25 Golden Records present.`)
