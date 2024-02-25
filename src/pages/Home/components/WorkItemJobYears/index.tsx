import type { JSX } from 'react'
import type { WorkItemJobYearsProps } from './types'
import RiSubtractLine from '~icons/ri/subtract-line'
import style from './index.module.css'

export type { WorkItemJobYearsProps }

/**
 * 工作年份
 * @param {WorkItemJobYearsProps} props 组件入参
 * @param {WorkItemJobYearsProps['startYear']} props.startYear 开始年份
 * @param {WorkItemJobYearsProps['endYear']} [props.endYear] 结束年份
 * @returns {JSX.Element} `WorkItemJobYears` 组件
 */
export const WorkItemJobYears = ({ startYear, endYear }: WorkItemJobYearsProps): JSX.Element => {
  return (
    <div className={style['work-item-job-years']}>
      <div className={style['job-years']}>
        {/* 开始年份 */}
        <span>{startYear}</span>

        {/* 结束年份 */}
        {startYear !== endYear && (
          <>
            <RiSubtractLine />
            <span>{endYear ?? 'Present'}</span>
          </>
        )}
      </div>
    </div>
  )
}
