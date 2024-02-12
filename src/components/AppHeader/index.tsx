import { type JSX, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RiMenuLine from '~icons/ri/menu-line'
import style from './index.module.css'

/**
 * 页眉
 * @returns {JSX.Element} the `AppHeader` component
 */
export const AppHeader = (): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(true)

  useEffect(() => {
    let prevScrollY = 0

    /**
     * 处理滚动事件
     */
    const handleScroll = (): void => {
      const scrollY = window.scrollY

      // 向上滚动时显示，向下滚动时隐藏
      setVisible(prevScrollY > scrollY)
      prevScrollY = scrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const headerClassName = `${style['header']} ${
    visible ? style['visible'] : style['hidden']
  }`.trim()

  return (
    <header className={headerClassName}>
      {/* Logo */}
      <Link className={style['logo']} to='/'>
        Jack
      </Link>

      {/* Menu Btn */}
      <div className={style['menu-btn']}>
        <RiMenuLine />
      </div>
    </header>
  )
}
