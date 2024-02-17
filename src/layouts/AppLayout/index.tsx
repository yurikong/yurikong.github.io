import { type JSX, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { AppFooter } from '@/components'

/**
 * 布局
 * @returns {JSX.Element} `AppLayout` 组件
 */
export const AppLayout = (): JSX.Element => {
  const [bottomBannerVisible, setBottomBannerVisible] = useState(true)

  /**
   * 处理底栏 onClick 事件
   */
  const handleBottomBannerClick = (): void => {
    setBottomBannerVisible(false)
  }

  return (
    <>
      <main>
        <Outlet />
      </main>

      <AppFooter />

      {/* TODO: 完成屏幕适配时删除 */}
      {bottomBannerVisible && (
        <div id='bottom-banner'>
          <div>
            Currently targeting phone browsers. For tablet and pc users, please
            view on phone for better experiences.
          </div>
          <button onClick={handleBottomBannerClick}>X</button>
        </div>
      )}
    </>
  )
}
