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
      },
      jobPosition: {
        jobTitle: 'Software Engineer',
        externalLinkProps: {
          to: 'https://www.sacmi.cn/zh-cn/Sacmi-China-cn',
          text: 'Sacmi Nanhai',
        },
      },
      jobResponsibility: {
        responsibility:
          'Build the core software for digital printing machines in ceramic tiles production in the R&D department. Provide leadership within a tiny software development team of 2 members through close collaboration and knowledge sharing.',
      },
    },
    {
      jobYears: {
        startYear: 2021,
        endYear: 2023,
      },
      jobPosition: {
        jobTitle: 'Frontend Developer',
        externalLinkProps: {
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
      {data.map(
        (
          { jobYears, jobPosition, jobResponsibility }: WorkItemProps,
          i: number
        ) => (
          <WorkItem
            className={style['work-item']}
            key={i}
            jobYears={jobYears}
            jobPosition={jobPosition}
            jobResponsibility={jobResponsibility}
          />
        )
      )}
    </ul>
  )
}
