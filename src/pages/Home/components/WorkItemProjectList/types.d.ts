import type { AppLinkProps } from '@/components/AppLink/types'

export interface WorkItemProjectListProps {
  data: AppLinkProps[]
  scrollToProject: (projectName: string) => void
}
