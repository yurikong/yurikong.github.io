import type { WorkItemJobYearsProps } from '../WorkItemJobYears/types'
import type { WorkItemJobPositionProps } from '../WorkItemJobPosition/types'
import type { WorkItemJobResponsibilityProps } from '../WorkItemJobResponsibility/types'

export interface WorkItemProps {
  jobYears: WorkItemJobYearsProps
  jobPosition: WorkItemJobPositionProps
  jobResponsibility: WorkItemJobResponsibilityProps
  className?: string | undefined
}
