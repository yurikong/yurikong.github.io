import type { JSX } from 'react'
import type { AppMenuOverlayProps } from './types'
import style from './index.module.css'

export type { AppMenuOverlayProps }

export const AppMenuOverlay = (): JSX.Element => {
  return <div className={style['app-menu-overlay']}>AppMenuOverlay</div>
}
