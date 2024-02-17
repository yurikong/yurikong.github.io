import type { MouseEventHandler, ReactNode } from 'react'

export interface SocialLinkProps {
  href: string
  title?: string | undefined
  children?: ReactNode
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined
  className?: string | undefined
}
