import type { JSX } from 'react'
import { Hamburger } from '@/components'
import './app-header.css'

export const AppHeader = (): JSX.Element => {
  return (
    <header className='app-header'>
      {/* 标题 */}
      <a className='logo' href='/'>
        jack
      </a>

      {/* 菜单按钮 */}
      <Hamburger className='hamburger' />
    </header>
  )
}
