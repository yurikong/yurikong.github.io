import type { JSX } from 'react'
import RiSubtractLine from '~icons/ri/subtract-line'
import style from './index.module.css'

interface WorkCardJobYearsProps {
  startYear: number
  endYear?: number | undefined
}

/**
 * 工作年份
 * @param {WorkCardJobYearsProps} props WorkCardJobYears props
 * @param {WorkCardJobYearsProps['startYear']} props.startYear start year
 * @param {WorkCardJobYearsProps['endYear']} [props.endYear] end year, default is `undefined`
 * @returns {JSX.Element} the WorkCardJobYears component
 */
export default function WorkCardJobYears({
  startYear,
  endYear = undefined,
}: WorkCardJobYearsProps): JSX.Element {
  return (
    <div className={style['work-card-job-years']}>
      <span>{startYear}</span>
      <RiSubtractLine />
      <span>{endYear ?? 'Present'}</span>
    </div>
  )
}
