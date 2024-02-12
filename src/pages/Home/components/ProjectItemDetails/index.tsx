import type { JSX } from 'react'
import type { ProjectItemDetailsProps } from './types'
import style from './index.module.css'

/**
 * 项目信息
 * @param {ProjectItemDetailsProps} props component props
 * @param {ProjectItemDetailsProps['name']} props.name project name
 * @param {ProjectItemDetailsProps['description']} props.description project description
 * @returns {JSX.Element} the `ProjectItemDetails` component
 */
export const ProjectItemDetails = ({
  name,
  description,
}: ProjectItemDetailsProps): JSX.Element => {
  return (
    <div className={style['details']}>
      <div className={style['name']}>{name}</div>
      <p className={style['description']}>{description}</p>
    </div>
  )
}
