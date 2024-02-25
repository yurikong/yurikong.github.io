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
 * @param {WorkItemProps} props 组件入参
 * @param {WorkItemProps['jobYears']} props.jobYears 工作年份
 * @param {WorkItemProps['jobPosition']} props.jobPosition 工作岗位
 * @param {WorkItemProps['jobResponsibility']} props.jobResponsibility 工作职责
 * @param {WorkItemProps['relatedProjects']} [props.relatedProjects] 相关项目
 * @param {WorkItemProps['scrollToProject']} props.scrollToProject 滚动到指定项目
 * @param {WorkItemProps['className']} [props.className] 组件样式
 * @returns {JSX.Element} `WorkItem` 组件
 */
export const WorkItem = ({
  jobYears,
  jobPosition,
  jobResponsibility,
  relatedProjects,
  scrollToProject,
  className = '',
}: WorkItemProps): JSX.Element => {
  const fullClassName = `${style['work-item']} ${className}`.trim()

  return (
    <li className={fullClassName}>
      {/* 工作年份 */}
      <WorkItemJobYears {...jobYears} />

      {/* 工作岗位 */}
      <WorkItemJobPosition {...jobPosition} />

      {/* 工作职责 */}
      <WorkItemJobResponsibility {...jobResponsibility} />

      {/* 关联项目 */}
      {relatedProjects?.length && <WorkItemProjectList data={relatedProjects} scrollToProject={scrollToProject} />}
    </li>
  )
}
