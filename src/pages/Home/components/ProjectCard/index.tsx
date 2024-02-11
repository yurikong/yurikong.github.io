import type { JSX } from 'react'
import style from './index.module.css'

/**
 * 项目卡片
 * @returns {JSX.Element} the `ProjectCard` component
 */
export const ProjectCard = (): JSX.Element => {
  // const divClassName = `${style['project-card']} ${className ?? ''}`.trim()
  const divClassName = style['project-card']

  return <div className={divClassName}>Project Card</div>
}
