import type { RecordStatus } from '../data/records'

const statusStyle: Record<RecordStatus, string> = {
  evergreen:       'bg-emerald-100 text-emerald-700',
  'annual review': 'bg-amber-100 text-amber-700',
  dynamic:         'bg-blue-100 text-blue-700',
  legacy:          'bg-gray-100 text-gray-600',
  archived:        'bg-gray-100 text-gray-500 line-through',
}

const statusLabel: Record<RecordStatus, string> = {
  evergreen:       'Evergreen',
  'annual review': 'Annual review',
  dynamic:         'Dynamic',
  legacy:          'Legacy',
  archived:        'Archived',
}

export default function StatusBadge({ status }: { status: RecordStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${statusStyle[status]}`}
      title={`Status: ${statusLabel[status]}`}
    >
      {statusLabel[status]}
    </span>
  )
}
