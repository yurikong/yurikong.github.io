import type { JSX } from 'react'
import type { WorkCardProps } from '../WorkCard/types'
import { WorkCard } from '..'
import style from './index.module.css'

/**
 * 工作卡片列表
 * @returns {JSX.Element} the `WorkCards` component
 */
export default function WorkCards(): JSX.Element {
  const workCardList: WorkCardProps[] = [
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
          'Build core software for digital printing machines in ceramic tiles production in the R&D department. Provide leadership within a tiny software development team of 2 members through close collaboration and knowledge sharing.',
      },
    },
  ]

  return (
    <div className={style['work-cards']}>
      {workCardList.map(
        (
          { jobYears, jobPosition, jobResponsibility }: WorkCardProps,
          i: number
        ) => (
          <WorkCard
            key={i}
            jobYears={jobYears}
            jobPosition={jobPosition}
            jobResponsibility={jobResponsibility}
          />
        )
      )}
    </div>
  )
}
