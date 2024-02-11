import type { JSX } from 'react'
import RiSubtractLine from '~icons/ri/subtract-line'
import style from './index.module.css'
import type { WorkItemJobYearsProps } from './types'

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
      <span>{startYear}</span>
      <RiSubtractLine />
      <span>{endYear ?? 'Present'}</span>
    </div>
  )
}
