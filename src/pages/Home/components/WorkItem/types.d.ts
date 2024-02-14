import type { WorkItemJobYearsProps } from '../WorkItemJobYears/types'
import type { WorkItemJobPositionProps } from '../WorkItemJobPosition/types'
import type { WorkItemJobResponsibilityProps } from '../WorkItemJobResponsibility/types'
import type { AppLinkProps } from '@/components/AppLink/types'

export interface WorkItemProps {
  jobYears: WorkItemJobYearsProps
  jobPosition: WorkItemJobPositionProps
  jobResponsibility: WorkItemJobResponsibilityProps
  relatedProjects?: AppLinkProps[] | undefined
  scrollToProject: (projectName: string) => void
  className?: string | undefined
}
