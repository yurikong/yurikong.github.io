import type { JSX } from 'react'
import type { MoreProps } from './types'
import RiArrowDownDoubleLine from '~icons/ri/arrow-down-double-line'
import style from './index.module.css'

export type { MoreProps }

/**
 * 往下更多
 * @param {MoreProps} props component props
 * @param {MoreProps['className']} props.className class applied by parent, default is `undefined`
 * @param {MoreProps['onClick']} props.onClick click handler
 * @returns {JSX.Element} the `More` component
 */
export const More = ({ onClick, className = '' }: MoreProps): JSX.Element => {
  const fullClassName = `${style['more']} ${className}`.trim()

  return (
    <button className={fullClassName} onClick={onClick}>
      <div className={style['text']}>More</div>
      <RiArrowDownDoubleLine />
    </button>
  )
}
