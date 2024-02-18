import type { JSX } from 'react'
import type { NavMenuProps } from './types'
import { Hamburger } from '..'

export type { NavMenuProps }

/**
 * 菜单
 * @returns {JSX.Element} `NavMenu` 组件
 */
export const NavMenu = (): JSX.Element => {
  return (
    <Hamburger
      onClick={() => {
        console.log('clicked')
      }}
    />
  )
}
