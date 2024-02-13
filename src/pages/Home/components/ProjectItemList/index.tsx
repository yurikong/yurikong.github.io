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
          "Desktop application for digital printing on ceramic tiles using Dimatix Starfire printheads and Meteor's PrintEngine SDK.",
        techStack: ['Electron', 'Typescript', 'Vue'],
      },
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1707432472523-615ae7c7b8f8',
      details: {
        name: 'COA Generator',
        description:
          'Desktop client for generating Certificate of Analysis in an analytical testing laboratory.',
        techStack: ['Flutter'],
      },
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1707432472523-615ae7c7b8f8',
      details: {
        name: 'Digifly',
        description:
          'Data visualization web app with 7 pages presented on 9 large screens in a bank lobby.',
        techStack: ['Javascript', 'Vue'],
      },
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1707432472523-615ae7c7b8f8',
      details: {
        name: 'Big Data Management Platform',
        description: 'CRM on the web. For bank internal use only.',
        techStack: ['Javascript', 'Vue'],
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
