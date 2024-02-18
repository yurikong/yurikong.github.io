import type { JSX } from 'react'
import { Outlet } from 'react-router-dom'
import { AppFooter, BottomBanner, AppMenuOverlay } from '@/components'

/**
 * 布局
 * @returns {JSX.Element} `AppLayout` 组件
 */
export const AppLayout = (): JSX.Element => {
  return (
    <>
      <main>
        <Outlet />
      </main>

      <AppFooter />

      <BottomBanner />

      <AppMenuOverlay />
    </>
  )
}
