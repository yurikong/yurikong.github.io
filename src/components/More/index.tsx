import type { JSX } from 'react'
import type { MoreProps } from './types'
import RiArrowDownDoubleLine from '~icons/ri/arrow-down-double-line'
import { scrollIntoView } from '@/utils'
import style from './index.module.css'

export type { MoreProps }

/**
 * 往下更多
 * @param {MoreProps} props component props
 * @param {MoreProps['className']} props.className class applied by parent, default is `undefined`
 * @param {MoreProps['scrollIntoViewRef']} props.scrollIntoViewRef target ref to call `scrollIntoView`
 * @returns {JSX.Element} the `More` component
 */
export const More = ({
  className = '',
  scrollIntoViewRef,
}: MoreProps): JSX.Element => {
  const fullClassName = `${style['more']} ${className}`.trim()

  /**
   * 处理点击事件
   */
  const handleClick = (): void => {
    scrollIntoView(scrollIntoViewRef)
  }

  return (
    <button className={fullClassName} onClick={handleClick}>
      <div className={style['text']}>More</div>
      <RiArrowDownDoubleLine />
    </button>
  )
}
