import type { JSX } from 'react'
import type { WorkCardJobPositionProps } from './types'
import { ExternalLink } from '@/components'
import style from './index.module.css'

/**
 * 工作岗位
 * @param {WorkCardJobPositionProps} props component props
 * @param {WorkCardJobPositionProps['jobTitle']} props.jobTitle job title
 * @param {WorkCardJobPositionProps['externalLinkProps']} props.externalLinkProps `ExternalLink` component props
 * @returns {JSX.Element} the `WorkCardJobPosition` component
 */
export default function WorkCardJobPosition({
  jobTitle,
  externalLinkProps,
}: WorkCardJobPositionProps): JSX.Element {
  return (
    <div className={style['work-card-job-position']}>
      <span>{jobTitle}</span>
      <span>@</span>
      <ExternalLink to={externalLinkProps.to} text={externalLinkProps.text} />
    </div>
  )
}
