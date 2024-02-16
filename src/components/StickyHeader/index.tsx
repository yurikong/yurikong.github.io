import type { JSX } from 'react'
import type { StickyHeaderProps } from './types'
import style from './index.module.css'

export type { StickyHeaderProps }

/**
 * 吸顶顶栏
 * @param {StickyHeaderProps} props 组件入参
 * @param {StickyHeaderProps['title']} props.title 标题，默认为 `undefined`
 * @param {StickyHeaderProps['slots']} props.slots 具名插槽
 * @param {StickyHeaderProps['className']} props.classNames 样式，默认为 `undefined`
 * @returns {JSX.Element} `StickyHeader` 组件
 */
export const StickyHeader = ({
  title = '',
  slots,
  className = '',
}: StickyHeaderProps): JSX.Element => {
  const headerClassName = `${style['header']} ${className}`.trim()

  return (
    <header className={headerClassName}>
      {/* 标题 */}
      {slots?.title ?? <span className={style['title']}>{title}</span>}

      {/* 菜单 */}
      {slots?.menu}
    </header>
  )
}
