import type { JSX } from 'react'
import style from './index.module.css'

interface WorkCardJobResponsibilityProps {
  text: string
}

/**
 * 工作职责
 * @param {WorkCardJobResponsibilityProps} props WorkCardJobResponsibility props
 * @param {WorkCardJobResponsibilityProps['text']} props.text text
 * @returns {JSX.Element} the WorkCardJobResponsibility component
 */
export default function WorkCardJobResponsibility({
  text,
}: WorkCardJobResponsibilityProps): JSX.Element {
  return <p className={style['work-card-job-responsibility']}>{text}</p>
}
