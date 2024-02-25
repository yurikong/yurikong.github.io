import type { JSX } from 'react'
import type { WorkItemJobResponsibilityProps } from './types'
import style from './index.module.css'

export type { WorkItemJobResponsibilityProps }

/**
 * 工作职责
 * @param {WorkItemJobResponsibilityProps} props 组件入参
 * @param {WorkItemJobResponsibilityProps['responsibility']} props.responsibility 工作职责
 * @returns {JSX.Element} `WorkItemJobResponsibility` 组件
 */
export const WorkItemJobResponsibility = ({ responsibility }: WorkItemJobResponsibilityProps): JSX.Element => {
  return <p className={style['work-item-job-responsibility']}>{responsibility}</p>
}
