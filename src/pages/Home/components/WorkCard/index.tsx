import type { JSX } from 'react'
import type { WorkCardProps } from './types'
import {
  WorkCardJobYears,
  WorkCardJobPosition,
  WorkCardJobResponsibility,
} from '..'
import style from './index.module.css'

/**
 * 工作卡片
 * @param {WorkCardProps} props component props
 * @param {WorkCardProps['jobYears']} props.jobYears job years
 * @param {WorkCardProps['jobPosition']} props.jobPosition job position
 * @param {WorkCardProps['jobResponsibility']} props.jobResponsibility job responsibility
 * @returns {JSX.Element} the `WorkCard` component
 */
export default function WorkCard({
  jobYears,
  jobPosition,
  jobResponsibility,
  className,
}: WorkCardProps): JSX.Element {
  const divClassName = `${style['work-card']} ${className ?? ''}`.trim()

  return (
    <div className={divClassName}>
      <WorkCardJobYears
        startYear={jobYears.startYear}
        endYear={jobYears.endYear}
      />

      <WorkCardJobPosition
        jobTitle={jobPosition.jobTitle}
        externalLinkProps={jobPosition.externalLinkProps}
      />

      <WorkCardJobResponsibility
        responsibility={jobResponsibility.responsibility}
      />
    </div>
  )
}
