import type { ProjectItemDetailsProps } from '../ProjectItemDetails/types'

export interface ProjectItemProps {
  imgSrc: string
  details: ProjectItemDetailsProps
  className?: string | undefined
}

export interface ProjectItemRef {
  scrollIntoView: (arg?: boolean | ScrollIntoViewOptions | undefined) => void
}
