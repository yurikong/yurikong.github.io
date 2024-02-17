import type { MouseEventHandler } from 'react'

export interface AboutProps {
  onScrollToRef: MouseEventHandler<HTMLElement>
}

export interface AboutRef {
  scrollIntoView: (arg?: boolean | ScrollIntoViewOptions | undefined) => void
}
