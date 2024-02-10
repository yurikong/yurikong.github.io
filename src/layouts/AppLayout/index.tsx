import type { JSX } from 'react'
import { Outlet } from 'react-router-dom'
import { AppHeader, AppFooter } from '@/components'

/**
 * @returns {JSX.Element} the AppLayout component
 */
export const AppLayout = (): JSX.Element => {
  return (
    <>
      <AppHeader />

      <main>
        <Outlet />
      </main>

      <AppFooter />
    </>
  )
}
