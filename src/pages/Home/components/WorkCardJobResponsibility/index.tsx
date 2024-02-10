import type { JSX } from 'react'
import type { WorkCardJobResponsibilityProps } from './types'
import style from './index.module.css'

/**
 * 工作职责
 * @param {WorkCardJobResponsibilityProps} props component props
 * @param {WorkCardJobResponsibilityProps['responsibility']} props.responsibility responsibility
 * @returns {JSX.Element} the `WorkCardJobResponsibility` component
 */
export default function WorkCardJobResponsibility({
  responsibility,
}: WorkCardJobResponsibilityProps): JSX.Element {
  return (
    <p className={style['work-card-job-responsibility']}>{responsibility}</p>
  )
}
