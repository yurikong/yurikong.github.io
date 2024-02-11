import type { JSX } from 'react'
import { ProjectItem } from '..'
import style from './index.module.css'

/**
 * 项目列表
 * @returns {JSX.Element} the `ProjectItemList` component
 */
export const ProjectItemList = (): JSX.Element => {
  return (
    <div className={style['project-item-list']}>
      <ProjectItem />
    </div>
  )
}
