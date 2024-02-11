import type { JSX } from 'react'
import type { WorkItemProps } from './types'
import {
  WorkItemJobYears,
  WorkItemJobPosition,
  WorkItemJobResponsibility,
} from '..'
import style from './index.module.css'

/**
 * 工作
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
  const fullClassName = `${style['work-item']} ${className ?? ''}`.trim()

  return (
    <li className={fullClassName}>
      <WorkItemJobYears {...jobYears} />

      <WorkItemJobPosition {...jobPosition} />

      <WorkItemJobResponsibility {...jobResponsibility} />
    </li>
  )
}
