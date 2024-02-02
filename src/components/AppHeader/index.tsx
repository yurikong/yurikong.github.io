import type { JSX } from 'react'
import {
  Link,
  // NavLink
} from 'react-router-dom'
import style from './index.module.css'
import RiMenuLine from '~icons/ri/menu-line'

/**
 * @returns {JSX.Element} the AppHeader component
 */
export default function AppHeader(): JSX.Element {
  // const navLinksUI = [
  //   { to: '/', label: 'Home' },
  //   { to: '/about', label: 'About' },
  //   { to: '/work', label: 'Work' },
  //   { to: '/contact', label: 'Contact' },
  // ]

  return (
    <header className={style['header']}>
      {/* Logo */}
      <Link className={style['logo']} to='/'>
        Jack
      </Link>

      {/* Menu Btn */}
      <div className={style['menu-btn']}>
        <RiMenuLine className={style['menu-icon']} />
      </div>

      {/* <nav>
        <ul className={style['nav-list']}>
          {navLinksUI.map(({ to, label }) => (
            <li key={to}>
              <NavLink className={style['nav-link']} to={to}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav> */}
    </header>
  )
}
