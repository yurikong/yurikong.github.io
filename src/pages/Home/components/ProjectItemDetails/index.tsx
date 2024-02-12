import type { JSX } from 'react'
import type { ProjectItemDetailsProps } from './types'
import style from './index.module.css'

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
