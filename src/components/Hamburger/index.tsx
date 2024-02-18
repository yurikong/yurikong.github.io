import type { JSX } from 'react'
import type { HamburgerProps } from './types'
import RiMenuLine from '~icons/ri/menu-line'
import style from './index.module.css'

export type { HamburgerProps }

/**
 * 汉堡包按钮
 * @param {HamburgerProps} props 组件入参
 * @param {HamburgerProps['onClick']} props.onClick 处理点击事件
 * @param {HamburgerProps['className']} [props.className] 组件样式
 * @returns {JSX.Element} `Hamburger` 组件
 */
export const Hamburger = ({
  onClick,
  className = '',
}: HamburgerProps): JSX.Element => {
  const divClassName = `${style['hamburger']} ${className}`.trim()

  return (
    <button
      className={divClassName}
      type='button'
      title='Menu'
      onClick={onClick}
    >
      <RiMenuLine />
    </button>
  )
}
