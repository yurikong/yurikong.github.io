import type { JSX } from 'react'
import type { AppMenuProps } from './types'
import { Hamburger } from '..'

export type { AppMenuProps }

/**
 * 菜单
 * @returns {JSX.Element} `AppMenu` 组件
 */
export const AppMenu = (): JSX.Element => {
  return (
    <div>
      <Hamburger
        onClick={() => {
          console.log('clicked')
        }}
      />
    </div>
  )
}
