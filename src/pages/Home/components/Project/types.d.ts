import type { MouseEventHandler } from 'react'

export interface ProjectProps {
  onScrollToRef: MouseEventHandler<HTMLElement>
}

export interface ProjectRef {
  scrollIntoView: (arg?: boolean | ScrollIntoViewOptions | undefined) => void
  scrollToProject: (
    projectName: string,
    arg?: boolean | ScrollIntoViewOptions | undefined
  ) => void
}
