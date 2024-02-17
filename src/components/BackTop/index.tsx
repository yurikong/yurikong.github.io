import type { JSX } from 'react'
import type { BackTopProps } from './types'
import RiArrowUpDoubleLine from '~icons/ri/arrow-up-double-line'
import { scrollToTop } from '@/utils'
import style from './index.module.css'

export type { BackTopProps }

/**
 * 返回顶部
 * @param {BackTopProps} props 组件入参
 * @param {BackTopProps['className']} [props.className] 组件样式
 * @returns {JSX.Element} `BackTop` 组件
 */
export const BackTop = ({ className = '' }: BackTopProps): JSX.Element => {
  const fullClassName = `${style['back-top']} ${className}`.trim()

  return (
    <button className={fullClassName} onClick={scrollToTop}>
      <div className={style['text']}>Top</div>
      <RiArrowUpDoubleLine />
    </button>
  )
}
