import type { JSX } from 'react'
import type { WorkItemJobPositionProps } from './types'
import { AppLink } from '@/components'
import style from './index.module.css'

export type { WorkItemJobPositionProps }

/**
 * 工作岗位
 * @param {WorkItemJobPositionProps} props 组件入参
 * @param {WorkItemJobPositionProps['jobTitle']} props.jobTitle 岗位名称
 * @param {WorkItemJobPositionProps['linkProps']} props.linkProps 公司名称（`AppLink` 组件入参）
 * @returns {JSX.Element} `WorkItemJobPosition` 组件
 */
export const WorkItemJobPosition = ({
  jobTitle,
  linkProps,
}: WorkItemJobPositionProps): JSX.Element => {
  return (
    <div className={style['work-item-job-position']}>
      {/* 工作岗位 */}
      <span>{jobTitle}</span>

      <span>@</span>

      {/* 公司名称（跳转链接） */}
      <AppLink {...linkProps} />
    </div>
  )
}
