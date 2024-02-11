import type { JSX } from 'react'
import type { WorkItemJobPositionProps } from './types'
import { ExternalLink } from '@/components'
import style from './index.module.css'

/**
 * 工作岗位
 * @param {WorkItemJobPositionProps} props component props
 * @param {WorkItemJobPositionProps['jobTitle']} props.jobTitle job title
 * @param {WorkItemJobPositionProps['externalLinkProps']} props.externalLinkProps `ExternalLink` component props
 * @returns {JSX.Element} the `WorkItemJobPosition` component
 */
export const WorkItemJobPosition = ({
  jobTitle,
  externalLinkProps,
}: WorkItemJobPositionProps): JSX.Element => {
  return (
    <div className={style['work-item-job-position']}>
      <span>{jobTitle}</span>
      <span>@</span>
      <ExternalLink to={externalLinkProps.to} text={externalLinkProps.text} />
    </div>
  )
}
