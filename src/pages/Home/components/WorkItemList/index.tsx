import type { JSX } from 'react'
import type { WorkItemProps } from '../WorkItem/types'
import { WorkItem } from '..'
import style from './index.module.css'

/**
 * 工作列表
 * @returns {JSX.Element} the `WorkItemList` component
 */
export const WorkItemList = (): JSX.Element => {
  const data: WorkItemProps[] = [
    {
      jobYears: {
        startYear: 2023,
        tag: 'full-time',
      },
      jobPosition: {
        jobTitle: 'Software Engineer',
        linkProps: {
          external: true,
          to: 'https://www.sacmi.cn/zh-cn/Sacmi-China-cn',
          text: 'Sacmi Nanhai',
        },
      },
      jobResponsibility: {
        responsibility:
          'Build a desktop client for digital printing machines in ceramic tiles production in the R&D department. Provide leadership within a tiny software development team of 2 members through close collaboration and knowledge sharing.',
      },
      projectTags: [
        {
          name: 'Sacmi Digital Printer Client',
          scrollIntoViewRef: undefined, // TODO: fix this
        },
        // TODO: remove below
        {
          name: 'SDPC',
          scrollIntoViewRef: undefined, // TODO: fix this
        },
        {
          name: 'Sacmi Digital Printer Client',
          scrollIntoViewRef: undefined, // TODO: fix this
        },
      ],
    },
    {
      jobYears: {
        startYear: 2023,
        endYear: 2023,
        tag: 'freelance',
      },
      jobPosition: {
        jobTitle: 'Developer',
        linkProps: {
          external: true,
          to: 'http://www.aatestingservice.com/',
          text: 'AATS',
        },
      },
      jobResponsibility: {
        responsibility:
          'Built a desktop client for generating Certificate of Analysis in an analytical testing laboratory. Used only off-work hours and spare time on weekends.',
      },
    },
    {
      jobYears: {
        startYear: 2021,
        endYear: 2023,
        tag: 'full-time',
      },
      jobPosition: {
        jobTitle: 'Front-End Developer',
        linkProps: {
          external: true,
          to: 'http://www.stramo.cn/',
          text: 'Stramo',
        },
      },
      jobResponsibility: {
        responsibility:
          'Developed and maintained 2 web apps for the client SdeBank, including a CRM system and a data visualization app. Worked closely with UI designers and QA engineers to ensure a good quality.',
      },
    },
  ]

  return (
    <ul>
      {data.map((item: WorkItemProps, i: number) => (
        <WorkItem className={style['work-item']} key={i} {...item} />
      ))}
    </ul>
  )
}
