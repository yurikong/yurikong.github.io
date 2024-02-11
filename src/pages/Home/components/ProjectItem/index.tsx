import type { JSX } from 'react'
import style from './index.module.css'

/**
 * 项目
 * @returns {JSX.Element} the `ProjectItem` component
 */
export const ProjectItem = (): JSX.Element => {
  // const divClassName = `${style['project-card']} ${className ?? ''}`.trim()
  const divClassName = style['project-item']

  return <div className={divClassName}>Project Item</div>
}
