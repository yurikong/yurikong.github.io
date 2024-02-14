import type { JSX } from 'react'
import type { ProjectItemDetailsProps } from './types'
import { ProjectItemTechStack } from '../ProjectItemTechStack'
import style from './index.module.css'

export type { ProjectItemDetailsProps }

/**
 * 项目信息
 * @param {ProjectItemDetailsProps} props component props
 * @param {ProjectItemDetailsProps['name']} props.name project name
 * @param {ProjectItemDetailsProps['description']} props.description project description
 * @param {ProjectItemDetailsProps['techStack']} props.techStack project tech stack / tools
 * @returns {JSX.Element} the `ProjectItemDetails` component
 */
export const ProjectItemDetails = ({
  name,
  description,
  techStack,
}: ProjectItemDetailsProps): JSX.Element => {
  return (
    <div className={style['details']}>
      <div className={style['name']}>{name}</div>
      <p className={style['description']}>{description}</p>
      {techStack?.length && <ProjectItemTechStack data={techStack} />}
    </div>
  )
}
