import type { MouseEventHandler } from 'react'

export interface IntroProps {
  onScrollTo: MouseEventHandler<HTMLButtonElement>
}

export interface IntroRef {
  scrollIntoView: (arg?: boolean | ScrollIntoViewOptions | undefined) => void
}
