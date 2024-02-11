import type { JSX } from 'react'
import style from './index.module.css'

/**
 * 项目
 * @returns {JSX.Element} the `ProjectItem` component
 */
export const ProjectItem = (): JSX.Element => {
  // const fullClassName = `${style['project-card']} ${className ?? ''}`.trim()
  const fullClassName = style['project-item']

  return <div className={fullClassName}>Project Item</div>
}
