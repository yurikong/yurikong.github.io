import type { ProjectItemRef } from '../ProjectItem/types'

export interface NamedProjectItemRef {
  name: string
  ref: ProjectItemRef | null
}

export interface ProjectItemListRef {
  scrollToProjectItem: (
    projectName: string,
    arg?: boolean | ScrollIntoViewOptions | undefined
  ) => void
}
