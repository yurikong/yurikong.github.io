import type { JSX } from 'react'
import type { MoreProps } from './types'
import RiArrowDownDoubleLine from '~icons/ri/arrow-down-double-line'
import style from './index.module.css'

/**
 * 往下更多
 * @param {MoreProps} props component props
 * @param {MoreProps['className']} props.className class applied by parent
 * @returns {JSX.Element} the `More` component
 */
export default function More({ className }: MoreProps): JSX.Element {
  const divClassName = `${style['more']} ${className ?? ''}`.trim()

  return (
    <div className={divClassName}>
      <div className={style['text']}>More</div>
      <RiArrowDownDoubleLine />
    </div>
  )
}
