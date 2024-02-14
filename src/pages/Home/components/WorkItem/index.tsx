import type { JSX } from 'react'
import type { WorkItemProps } from './types'
import { WorkItemJobYears } from '../WorkItemJobYears'
import { WorkItemJobPosition } from '../WorkItemJobPosition'
import { WorkItemJobResponsibility } from '../WorkItemJobResponsibility'
import { WorkItemProjectList } from '../WorkItemProjectList'
import style from './index.module.css'

export type { WorkItemProps }

/**
 * 工作
 * @param {WorkItemProps} props component props
 * @param {WorkItemProps['jobYears']} props.jobYears job years
 * @param {WorkItemProps['jobPosition']} props.jobPosition job position
 * @param {WorkItemProps['jobResponsibility']} props.jobResponsibility job responsibility
 * @param {WorkItemProps['relatedProjects']} props.relatedProjects related projects
 * @returns {JSX.Element} the `WorkItem` component
 */
export const WorkItem = ({
  jobYears,
  jobPosition,
  jobResponsibility,
  relatedProjects,
  className,
}: WorkItemProps): JSX.Element => {
  const fullClassName = `${style['work-item']} ${className ?? ''}`.trim()

  return (
    <li className={fullClassName}>
      <WorkItemJobYears {...jobYears} />

      <WorkItemJobPosition {...jobPosition} />

      <WorkItemJobResponsibility {...jobResponsibility} />

      {relatedProjects?.length && (
        <WorkItemProjectList data={relatedProjects} />
      )}
    </li>
  )
}
