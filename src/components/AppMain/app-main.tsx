import type { JSX } from 'react'
import { Outlet } from 'react-router-dom'
import style from './app-main.module.css'

export const AppMain = (): JSX.Element => {
  return (
    <main className={style['app-main']}>
      <Outlet />
    </main>
  )
}
