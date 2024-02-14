import { type JSX, forwardRef, useRef, useImperativeHandle } from 'react'
import type { IntroProps, IntroRef } from './types'
import { More } from '@/components'
import style from './index.module.css'

export type { IntroProps, IntroRef }

/**
 * 开场白
 * @param {IntroProps} props 组件入参
 * @param {IntroProps['onScrollToRef']} props.onScrollToRef 处理 `More` 组件的 `onClick`
 * @returns {JSX.Element} `Intro` 组件
 */
export const Intro = forwardRef<IntroRef, IntroProps>(function Intro(
  { onScrollToRef },
  ref
): JSX.Element {
  const introRef = useRef<HTMLElement | null>(null)

  useImperativeHandle(
    ref,
    () => {
      return {
        scrollIntoView(
          arg?: boolean | ScrollIntoViewOptions | undefined
        ): void {
          introRef.current?.scrollIntoView(arg)
        },
      }
    },
    []
  )

  return (
    <section className={style['intro']} ref={introRef}>
      {/* 打招呼 */}
      <h1>Hi, I&apos;m Jack!</h1>

      {/* 一句话形容自己 */}
      <h2>I am a front-end developer who loves a good latte.</h2>

      {/* 滚动到下个部分 */}
      <More className={style['more']} onClick={onScrollToRef} />
    </section>
  )
})
