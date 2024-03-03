import type { JSX } from 'react'
import { Hamburger } from '@/components'
import style from './app-header.module.css'

export const AppHeader = (): JSX.Element => {
  return (
    <header className={style['app-header']}>
      {/* 标题 */}
      <a className={style['logo']} href='/'>
        jack
      </a>

      {/* 菜单按钮 */}
      <Hamburger className={style['hamburger']} />
    </header>
  )
}
