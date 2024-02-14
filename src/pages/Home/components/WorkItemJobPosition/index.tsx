import type { JSX } from 'react'
import type { WorkItemJobPositionProps } from './types'
import { AppLink } from '@/components'
import style from './index.module.css'

export type { WorkItemJobPositionProps }

/**
 * 工作岗位
 * @param {WorkItemJobPositionProps} props component props
 * @param {WorkItemJobPositionProps['jobTitle']} props.jobTitle job title
 * @param {WorkItemJobPositionProps['linkProps']} props.linkProps `AppLink` component props
 * @returns {JSX.Element} the `WorkItemJobPosition` component
 */
export const WorkItemJobPosition = ({
  jobTitle,
  linkProps,
}: WorkItemJobPositionProps): JSX.Element => {
  return (
    <div className={style['work-item-job-position']}>
      <span>{jobTitle}</span>
      <span>@</span>
      <AppLink {...linkProps} />
    </div>
  )
}
