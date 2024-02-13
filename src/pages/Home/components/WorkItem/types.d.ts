import type { WorkItemJobYearsProps } from '../WorkItemJobYears/types'
import type { WorkItemJobPositionProps } from '../WorkItemJobPosition/types'
import type { WorkItemJobResponsibilityProps } from '../WorkItemJobResponsibility/types'
import type { WorkItemProjectTagProps } from '../WorkItemProjectTag/types'

export interface WorkItemProps {
  jobYears: WorkItemJobYearsProps
  jobPosition: WorkItemJobPositionProps
  jobResponsibility: WorkItemJobResponsibilityProps
  projectTags?: WorkItemProjectTagProps[] | undefined
  className?: string | undefined
}
