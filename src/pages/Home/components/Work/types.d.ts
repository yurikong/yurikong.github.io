import type { MouseEventHandler } from 'react'

export interface WorkProps {
  onScrollTo?: MouseEventHandler<HTMLButtonElement> | undefined
}

export interface WorkRef {
  scrollIntoView: (arg?: boolean | ScrollIntoViewOptions | undefined) => void
}
