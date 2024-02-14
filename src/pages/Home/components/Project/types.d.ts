import type { MouseEventHandler } from 'react'

export interface ProjectProps {
  onScrollTo?: MouseEventHandler<HTMLButtonElement> | undefined
}

export interface ProjectRef {
  scrollIntoView: (arg?: boolean | ScrollIntoViewOptions | undefined) => void
}
