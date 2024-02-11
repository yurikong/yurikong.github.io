import type { JSX } from 'react'
import { ProjectCard } from '..'
import style from './index.module.css'

/**
 * 项目列表
 * @returns {JSX.Element} the `ProjectList` component
 */
export const ProjectList = (): JSX.Element => {
  return (
    <div className={style['project-list']}>
      <ProjectCard />
    </div>
  )
}
