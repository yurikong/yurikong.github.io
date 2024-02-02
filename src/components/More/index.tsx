import type { JSX } from 'react'
import RiArrowDownDoubleLine from '~icons/ri/arrow-down-double-line'
import style from './index.module.css'

// component props
interface Props {
  className: string
}

/**
 * Scroll to element.
 * @param {Props} props component props
 * @param {string} props.className element class
 * @returns {JSX.Element} the More component
 */
export default function More({ className }: Props): JSX.Element {
  className = className.trim()

  return (
    <div className={`${style['more']} ${className}`}>
      <div className={style['text']}>More</div>
      <RiArrowDownDoubleLine />
    </div>
  )
}
