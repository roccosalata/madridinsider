import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from 'react'
import { navigate } from '../lib/router'

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  to: string
  children?: ReactNode
  /** Mark as external — will use a normal anchor with target="_blank". */
  external?: boolean
}

/**
 * Internal link that uses the History API router. Use `external` for
 * links to other sites or anything that should bypass the SPA router
 * (e.g. PDFs, mailto, tel).
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { to, external, onClick, target, rel, ...rest },
  ref
) {
  if (external) {
    return (
      <a
        ref={ref}
        href={to}
        target={target ?? '_blank'}
        rel={rel ?? 'noopener noreferrer'}
        onClick={onClick}
        {...rest}
      />
    )
  }
  return (
    <a
      ref={ref}
      href={to}
      onClick={(e) => {
        if (
          e.defaultPrevented ||
          e.button !== 0 ||
          e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
        ) {
          onClick?.(e)
          return
        }
        e.preventDefault()
        onClick?.(e)
        navigate(to)
      }}
      target={target}
      rel={rel}
      {...rest}
    />
  )
})
