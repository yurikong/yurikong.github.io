import type { MouseEventHandler } from 'react'

export interface IntroProps {
  onScrollToRef: MouseEventHandler<HTMLElement>
}

export interface IntroRef {
  scrollIntoView: (arg?: boolean | ScrollIntoViewOptions | undefined) => void
}
