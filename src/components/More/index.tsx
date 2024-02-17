import type { JSX } from 'react'
import type { MoreProps } from './types'
import RiArrowDownDoubleLine from '~icons/ri/arrow-down-double-line'
import style from './index.module.css'

export type { MoreProps }

/**
 * 往下更多
 * @param {MoreProps} props 组件入参
 * @param {MoreProps['onClick']} [props.onClick] 处理 `onClick` 事件
 * @param {MoreProps['className']} [props.className] 组件样式
 * @returns {JSX.Element} `More` 组件
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
