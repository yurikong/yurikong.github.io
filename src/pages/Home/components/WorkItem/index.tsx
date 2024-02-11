import type { JSX } from 'react'
import type { WorkItemProps } from './types'
import {
  WorkItemJobYears,
  WorkItemJobPosition,
  WorkItemJobResponsibility,
} from '..'
import style from './index.module.css'

/**
 * 工作卡片
 * @param {WorkItemProps} props component props
 * @param {WorkItemProps['jobYears']} props.jobYears job years
 * @param {WorkItemProps['jobPosition']} props.jobPosition job position
 * @param {WorkItemProps['jobResponsibility']} props.jobResponsibility job responsibility
 * @returns {JSX.Element} the `WorkItem` component
 */
export const WorkItem = ({
  jobYears,
  jobPosition,
  jobResponsibility,
  className,
}: WorkItemProps): JSX.Element => {
  const divClassName = `${style['work-item']} ${className ?? ''}`.trim()

  return (
    <div className={divClassName}>
      <WorkItemJobYears
        startYear={jobYears.startYear}
        endYear={jobYears.endYear}
      />

      <WorkItemJobPosition
        jobTitle={jobPosition.jobTitle}
        externalLinkProps={jobPosition.externalLinkProps}
      />

      <WorkItemJobResponsibility
        responsibility={jobResponsibility.responsibility}
      />
    </div>
  )
}
