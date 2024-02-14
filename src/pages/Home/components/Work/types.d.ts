import type { MouseEventHandler } from 'react'

export interface WorkProps {
  onScrollToRef: MouseEventHandler<HTMLElement>
  scrollToProject: (projectName: string) => void
}

export interface WorkRef {
  scrollIntoView: (arg?: boolean | ScrollIntoViewOptions | undefined) => void
}
