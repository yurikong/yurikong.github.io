import type { JSX } from 'react'
import { AppHeader, AppMain, AppFooter } from '@/components'
import style from './app-layout.module.css'

export const Component = (): JSX.Element => {
  return (
    <div className={style['app-layout']}>
      <AppHeader />
      <AppMain />
      <AppFooter />
    </div>
  )
}

Component.displayName = 'AppLayout'
