import type { JSX } from 'react'
import type { WorkItemJobYearsProps } from './types'
import RiSubtractLine from '~icons/ri/subtract-line'
import style from './index.module.css'

/**
 * 工作年份
 * @param {WorkItemJobYearsProps} props component props
 * @param {WorkItemJobYearsProps['startYear']} props.startYear start year
 * @param {WorkItemJobYearsProps['endYear']} [props.endYear] end year, default is `undefined`
 * @returns {JSX.Element} the `WorkItemJobYears` component
 */
export const WorkItemJobYears = ({
  startYear,
  endYear = undefined,
}: WorkItemJobYearsProps): JSX.Element => {
  return (
    <div className={style['work-item-job-years']}>
      <div className={style['job-years']}>
        <span>{startYear}</span>
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
