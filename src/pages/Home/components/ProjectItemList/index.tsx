import type { JSX } from 'react'
import type { ProjectItemProps } from '../ProjectItem/types'
import { ProjectItem } from '..'
import style from './index.module.css'

/**
 * 项目列表
 * @returns {JSX.Element} the `ProjectItemList` component
 */
export const ProjectItemList = (): JSX.Element => {
  const data: ProjectItemProps[] = [
    {
      imgSrc: 'https://images.unsplash.com/photo-1707432472523-615ae7c7b8f8',
      details: {
        name: 'Sacmi Digital Printer Client',
        description:
          "A desktop client for digital printing on ceramic tiles using Dimatix Starfire printheads and Meteor's PrintEngine SDK.",
      },
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1707432472523-615ae7c7b8f8',
      details: {
        name: 'SDPC',
        description:
          'A desktop client for digital printing on ceramic tiles using Dimatix Starfire printheads and Meteor PrintEngine SDK.',
      },
    },
  ]
  return (
    <ul>
      {data.map((item: ProjectItemProps, i: number) => (
        <ProjectItem className={style['project-item']} key={i} {...item} />
      ))}
    </ul>
  )
}
