import type { JSX } from 'react'
import type { ProjectItemTagStackProps } from './types'
import style from './index.module.css'

export type { ProjectItemTagStackProps }

/**
 * 技术栈
 * @param {ProjectItemTagStackProps} props 组件入参
 * @param {ProjectItemTagStackProps['data']} props.data 使用的技术栈
 * @returns {JSX.Element} `ProjectItemTechStack` 组件
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
