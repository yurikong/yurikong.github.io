import { type JSX, forwardRef, useRef, useImperativeHandle } from 'react'
import type { AboutProps, AboutRef } from './types'
import { StickyHeader, More } from '@/components'
import style from './index.module.css'

export type { AboutProps, AboutRef }

/**
 * 关于
 * @param {AboutProps} props 组件入参
 * @param {AboutProps['onScrollToRef']} props.onScrollToRef 处理 `More` 组件的 `onClick`
 * @returns {JSX.Element} `About` 组件
 */
export const About = forwardRef<AboutRef, AboutProps>(function About(
  { onScrollToRef },
  ref
): JSX.Element {
  const aboutRef = useRef<HTMLElement | null>(null)

  // 暴露给父组件的方法
  useImperativeHandle(ref, () => {
    return {
      /**
       * 滚动到该组件
       * @param {boolean | ScrollIntoViewOptions | undefined} [arg] 滚动选项
       */
      scrollIntoView(arg?: boolean | ScrollIntoViewOptions | undefined): void {
        aboutRef.current?.scrollIntoView(arg)
      },
    }
  })

  return (
    <section className={style['about']} ref={aboutRef}>
      {/* 标题 */}
      <StickyHeader title='About' />

      <div className={style['content']}>
        {/* 成为前端开发的理由 */}
        <p className={style['p']}>
          Back in 2018, I transferred from Mt.Sac to CSULB and was lucky enough
          to meet Jimmy Nguyen, who later became my best friend in university.
          We partnered in almost every course project, and his enthusiasm for
          React sparkled my interest into the front-end realm.
        </p>

        {/* 最近的工作重点 */}
        <p className={style['p']}>
          Fast-forward to today, I&apos;ve had the privilege to build software
          for companies ranging from start-ups to industry leading companies. My
          main focus these days is building a software for digital printing on
          ceramic tiles at Sacmi Nanhai. In my free time, I try to expand my
          freelance career to prepare for becoming a Digital Nomad in the
          future.
        </p>

        {/* 业余活动 */}
        <p className={style['p']}>
          When I&apos;m not at the computer, I&apos;m usually hanging out with
          my wife and daughter, and trying to master the art of coffee making.
        </p>

        {/* 滚动到下个部分 */}
        <More className={style['more']} onClick={onScrollToRef} />
      </div>
    </section>
  )
})
