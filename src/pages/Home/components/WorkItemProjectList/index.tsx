import type { JSX } from 'react'
import type { WorkItemProjectListProps } from './types'
import type { AppLinkProps } from '@/components/AppLink/types'
import { AppLink } from '@/components'
import style from './index.module.css'

/**
 * 关联项目标签
 * @param {WorkItemProjectListProps} props component props
 * @param {WorkItemProjectListProps['data']} props.data related projects
 * @returns {JSX.Element} the `WorkItemProjectList` component
 */
export const WorkItemProjectList = ({
  data,
}: WorkItemProjectListProps): JSX.Element => {
  return (
    <ul className={style['work-item-project-list']}>
      {data.map((item: AppLinkProps, i: number): JSX.Element => {
        return (
          <li key={i}>
            <AppLink {...item} />
          </li>
        )
      })}
    </ul>
  )
}
