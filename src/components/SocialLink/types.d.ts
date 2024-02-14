import type { JSX, MouseEventHandler } from 'react'

export interface SocialLinkProps {
  title?: string | undefined
  child: JSX.Element
  href: string
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined
  className?: string | undefined
}
