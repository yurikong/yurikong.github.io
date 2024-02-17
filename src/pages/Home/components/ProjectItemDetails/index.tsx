import type { JSX } from 'react'
import type { ProjectItemDetailsProps } from './types'
import { ProjectItemTechStack } from '../ProjectItemTechStack'
import style from './index.module.css'

export type { ProjectItemDetailsProps }

/**
 * 项目信息
 * @param {ProjectItemDetailsProps} props 组件入参
 * @param {ProjectItemDetailsProps['name']} props.name 项目名称
 * @param {ProjectItemDetailsProps['description']} props.description 项目描述
 * @param {ProjectItemDetailsProps['techStack']} [props.techStack] 使用技术栈
 * @returns {JSX.Element} `ProjectItemDetails` 组件
 */
export const ProjectItemDetails = ({
  name,
  description,
  techStack,
}: ProjectItemDetailsProps): JSX.Element => {
  return (
    <div className={style['details']}>
      {/* 项目名称 */}
      <div className={style['name']}>{name}</div>

      {/* 项目描述 */}
      <p className={style['description']}>{description}</p>

      {/* 使用的技术栈 */}
      {techStack?.length && <ProjectItemTechStack data={techStack} />}
    </div>
  )
}
