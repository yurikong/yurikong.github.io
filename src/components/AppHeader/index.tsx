import type { JSX } from 'react'
import { Link } from 'react-router-dom'
import RiMenuLine from '~icons/ri/menu-line'
import style from './index.module.css'

/**
 * @returns {JSX.Element} the AppHeader component
 */
export const AppHeader = (): JSX.Element => {
  return (
    <header className={style['header']}>
      {/* Logo */}
      <Link className={style['logo']} to='/'>
        Jack
      </Link>

      {/* Menu Btn */}
      <div className={style['menu-btn']}>
        <RiMenuLine />
      </div>
    </header>
  )
}
