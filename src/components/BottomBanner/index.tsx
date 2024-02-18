import { type JSX, useState } from 'react'
import type { BottomBannerProps } from './types'
import style from './index.module.css'

export type { BottomBannerProps }

export const BottomBanner = ({
  className = '',
}: BottomBannerProps): JSX.Element => {
  const [visible, setVisible] = useState(true)

  const bottomBannerClassName = `${style['bottom-banner']} ${
    visible ? '' : style['hidden']
  } ${className}`.trim()

  return (
    <div className={bottomBannerClassName}>
      <div>
        Currently targeting phone browsers. For tablet and pc users, please view
        on phone for better experiences.
      </div>

      <button
        type='button'
        onClick={() => {
          setVisible(false)
        }}
      >
        X
      </button>
    </div>
  )
}
