import type { MouseEventHandler } from 'react'

export interface AppLinkProps {
  external?: boolean | undefined
  text: string
  to?: string | undefined
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined
}
