import type { JSX } from 'react'
import type { ProjectItemProps } from './types'
import { ProjectItemDetails } from '..'
import style from './index.module.css'

/**
 * 项目
 * @param {ProjectItemProps} props component props
 * @param {ProjectItemProps['imgSrc']} props.imgSrc image url
 * @param {ProjectItemProps['details']} props.details details
 * @param {ProjectItemProps['className']} props.className parent assigned className
 * @returns {JSX.Element} the `ProjectItem` component
 */
export const ProjectItem = ({
  imgSrc,
  details,
  className,
}: ProjectItemProps): JSX.Element => {
  const fullClassName = `${style['project-item']} ${className ?? ''}`.trim()

  return (
    <li className={fullClassName}>
      <div className={style['img-wrapper']}>
        <img src={imgSrc} alt='Project cover.' />
      </div>

      <ProjectItemDetails {...details} />
    </li>
  )
}
