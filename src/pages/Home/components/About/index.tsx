import { type JSX, forwardRef, useRef, useImperativeHandle } from 'react'
import type { AboutRef } from './types'
import style from './index.module.css'

export type { AboutRef }

/**
 * 关于
 * @returns {JSX.Element} `About` 组件
 */
export const About = forwardRef<AboutRef>(function About(_, ref): JSX.Element {
  const aboutRef = useRef<HTMLElement | null>(null)

  // 暴露给父组件的方法
  useImperativeHandle(ref, () => {
    return {
      /**
       * 滚动到该组件
       * @param {boolean | ScrollIntoViewOptions | undefined} arg 滚动选项
       */
      scrollIntoView(arg?: boolean | ScrollIntoViewOptions | undefined): void {
        aboutRef.current?.scrollIntoView(arg)
      },
    }
  })

  return (
    <section className={style['about']} ref={aboutRef}>
      About
    </section>
  )
})
