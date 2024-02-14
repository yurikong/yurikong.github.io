import type { JSX } from 'react'
import type { ProjectItemTagStackProps } from './types'
import style from './index.module.css'

export type { ProjectItemTagStackProps }

/**
 * 技术栈
 * @param {ProjectItemTagStackProps} props component props
 * @param {ProjectItemTagStackProps['data']} props.data tech stack
 * @returns {JSX.Element} the `ProjectItemTechStack` component
 */
export const ProjectItemTechStack = ({
  data,
}: ProjectItemTagStackProps): JSX.Element => {
  return (
    <ul className={style['tech-stack']}>
      {data.map<JSX.Element>((text: string, i: number) => (
        <li key={i}>{text}</li>
      ))}
    </ul>
  )
}
