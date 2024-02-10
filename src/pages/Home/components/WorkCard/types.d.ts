import type { WorkCardJobYearsProps } from '../WorkCardJobYears/types'
import type { WorkCardJobPositionProps } from '../WorkCardJobPosition/types'
import type { WorkCardJobResponsibilityProps } from '../WorkCardJobResponsibility/types'

export interface WorkCardProps {
  jobYears: WorkCardJobYearsProps
  jobPosition: WorkCardJobPositionProps
  jobResponsibility: WorkCardJobResponsibilityProps
  className?: string | undefined
}
