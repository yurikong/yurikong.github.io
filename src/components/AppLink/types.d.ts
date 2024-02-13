import type { MutableRefObject } from 'react'

export interface AppLinkProps {
  external?: boolean | undefined
  text: string
  to?: string | undefined
  scrollIntoViewRef?: MutableRefObject<HTMLElement | null> | undefined
}
