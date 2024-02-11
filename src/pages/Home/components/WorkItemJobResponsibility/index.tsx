import type { JSX } from 'react'
import type { WorkItemJobResponsibilityProps } from './types'
import style from './index.module.css'

/**
 * 工作职责
 * @param {WorkItemJobResponsibilityProps} props component props
 * @param {WorkItemJobResponsibilityProps['responsibility']} props.responsibility responsibility
 * @returns {JSX.Element} the `WorkItemJobResponsibility` component
 */
export const WorkItemJobResponsibility = ({
  responsibility,
}: WorkItemJobResponsibilityProps): JSX.Element => {
  return (
    <p className={style['work-item-job-responsibility']}>{responsibility}</p>
  )
}
