import type { JSX } from 'react'
import { ExternalLink } from '@/components'
import type { ExternalLinkProps } from '@/components/ExternalLink'
import style from './index.module.css'

interface WorkCardJobPositionProps {
  jobTitle: string
  externalLinkProps: ExternalLinkProps
}

/**
 * 工作岗位
 * @param {WorkCardJobPositionProps} props WorkCardJobPosition props
 * @param {WorkCardJobPositionProps['jobTitle']} props.jobTitle job title
 * @param {WorkCardJobPositionProps['externalLinkProps']} props.externalLinkProps ExternalLink props
 * @returns {JSX.Element} the WorkCardJobPosition component
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
