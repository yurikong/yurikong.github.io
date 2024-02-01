import type { JSX } from 'react'
import { Outlet } from 'react-router-dom'
import style from './index.module.css'
import { AppHeader, AppFooter } from '@/components'

/**
 * @returns {JSX.Element} the AppLayout component
 */
export default function AppLayout(): JSX.Element {
  return (
    <div className={style['app-layout']}>
      <AppHeader />

      <main>
        <Outlet />
      </main>

      <AppFooter />
    </div>
  )
}
