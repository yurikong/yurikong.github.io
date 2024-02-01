import type { JSX } from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from './index.module.css'

/**
 * @returns {JSX.Element} the AppHeader component
 */
export default function AppHeader(): JSX.Element {
  const navLinksUI = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/work', label: 'Work' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className={style['app-header']}>
      {/* logo */}
      <Link className={style['app-logo']} to='/'>
        jack
      </Link>

      {/* nav bar */}
      <nav>
        <ul className={style['nav-list']}>
          {navLinksUI.map(({ to, label }) => (
            <li key={to}>
              <NavLink className={style['nav-link']} to={to}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
