import type { JSX } from 'react'
import { AppHeader, AppMain, AppFooter } from '@/components'
import './app-layout.css'

export const Component = (): JSX.Element => {
  return (
    <div className='app-layout'>
      <AppHeader />
      <AppMain />
      <AppFooter />
    </div>
  )
}

Component.displayName = 'AppLayout'
