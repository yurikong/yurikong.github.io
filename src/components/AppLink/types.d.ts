import type { MouseEventHandler } from 'react'

export interface AppLinkProps {
  text: string
  to?: string | undefined
  external?: boolean | undefined
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined
}
