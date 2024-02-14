import type { JSX } from 'react'
import type { WorkItemListProps, WorkItemData } from './types'
import { WorkItem } from '../WorkItem'
import style from './index.module.css'

/**
 * 工作列表
 * @param {WorkItemListProps} props 组件入参
 * @param {WorkItemListProps['scrollToProject']} props.scrollToProject 滚动到指定项目
 * @returns {JSX.Element} the `WorkItemList` component
 */
export const WorkItemList = ({
  scrollToProject,
}: WorkItemListProps): JSX.Element => {
  // 工作数据
  const data: WorkItemData[] = [
    {
      jobYears: {
        startYear: 2023,
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
      relatedProjects: [
        {
          text: 'Sacmi Digital Printer Client',
        },
      ],
    },
    {
      jobYears: {
        startYear: 2023,
        endYear: 2023,
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
          'Built a desktop client for generating Certificate of Analysis in an analytical testing laboratory.',
      },
      relatedProjects: [
        {
          text: 'COA Generator',
        },
      ],
    },
    {
      jobYears: {
        startYear: 2021,
        endYear: 2023,
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
      relatedProjects: [
        {
          text: 'Digifly',
        },
        {
          text: 'Big Data Management Platform',
        },
      ],
    },
  ]

  return (
    <ul>
      {data.map<JSX.Element>((item: WorkItemData, i: number) => (
        <WorkItem
          className={style['work-item']}
          key={i}
          {...item}
          scrollToProject={scrollToProject}
        />
      ))}
    </ul>
  )
}
