import type { JSX } from 'react'
import {
  WorkCardJobYears,
  WorkCardJobPosition,
  WorkCardJobResponsibility,
} from '..'
import style from './index.module.css'

/**
 * @returns {JSX.Element} WorkCard
 */
export default function WorkCard(): JSX.Element {
  return (
    <div className={style['work-card']}>
      <WorkCardJobYears startYear={2023} />

      <WorkCardJobPosition
        jobTitle='Software Engineer'
        externalLinkProps={{
          to: 'https://www.sacmi.cn/zh-cn/Sacmi-China-cn',
          text: 'Sacmi Nanhai',
        }}
      />

      <WorkCardJobResponsibility text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, perspiciatis corrupti excepturi nulla reiciendis laboriosam expedita cumque eum doloribus blanditiis, fugit cupiditate, porro praesentium dolorum! Repudiandae nam minima amet corrupti.' />
    </div>
  )
}
