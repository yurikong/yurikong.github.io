import type { MouseEventHandler } from 'react'

export interface IntroProps {
  onScrollTo?: MouseEventHandler<HTMLButtonElement> | undefined
}

export interface IntroRef {
  scrollIntoView: (arg?: boolean | ScrollIntoViewOptions | undefined) => void
}
