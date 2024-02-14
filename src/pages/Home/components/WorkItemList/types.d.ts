import type { WorkItemProps } from '../WorkItem/types'

export interface WorkItemListProps {
  scrollToProject: (projectName: string) => void
}

export type WorkItemData = Omit<WorkItemProps, 'scrollToProject'>
