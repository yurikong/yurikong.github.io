import type { JSX } from 'react'
import type { BackTopProps } from './types'
import RiArrowUpDoubleLine from '~icons/ri/arrow-up-double-line'
import style from './index.module.css'

export type { BackTopProps }

/**
 * 返回顶部
 * @param {BackTopProps} props component props
 * @param {BackTopProps['className']} props.className parent applied className, default is `undefined`
 * @returns {JSX.Element} the `BackTop` component
 */
export const BackTop = ({ className = '' }: BackTopProps): JSX.Element => {
  const fullClassName = `${style['back-top']} ${className}`.trim()

  /**
   * 处理点击事件
   */
  const handleClick = (): void => {
    // scrollIntoView(scrollIntoViewRef)
  }

  return (
    <button className={fullClassName} onClick={handleClick}>
      <div className={style['text']}>Back to Top</div>
      <RiArrowUpDoubleLine />
    </button>
  )
}
