import type { JSX } from 'react'
import type { WorkItemProjectListProps } from './types'
import type { AppLinkProps } from '@/components/AppLink/types'
import { AppLink } from '@/components'
import style from './index.module.css'

export type { WorkItemProjectListProps }

/**
 * 关联项目标签
 * @param {WorkItemProjectListProps} props 组件入参
 * @param {WorkItemProjectListProps['data']} props.data 项目列表
 * @param {WorkItemProjectListProps['scrollToProject']} props.scrollToProject 滚动到指定项目
 * @returns {JSX.Element} `WorkItemProjectList` 组件
 */
export const WorkItemProjectList = ({
  data,
  scrollToProject,
}: WorkItemProjectListProps): JSX.Element => {
  return (
    <ul className={style['work-item-project-list']}>
      {data.map<JSX.Element>((item: AppLinkProps, i: number) => {
        return (
          <li key={i}>
            <AppLink
              {...item}
              onClick={(e) => {
                e.preventDefault()
                scrollToProject(item.text)
              }}
            />
          </li>
        )
      })}
    </ul>
  )
}
