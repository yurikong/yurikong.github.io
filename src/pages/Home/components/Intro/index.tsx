import { type JSX, forwardRef, useRef, useImperativeHandle } from 'react'
import type { IntroProps, IntroRef } from './types'
import { More } from '@/components'
import style from './index.module.css'

export type { IntroProps, IntroRef }

/**
 * 开场白
 * @param {IntroProps} props component props
 * @param {IntroProps['onScrollTo']} props.onScrollTo click handler for scrolling to a `ref`
 * @returns {JSX.Element} the `Intro` component
 */
export const Intro = forwardRef<IntroRef, IntroProps>(function Intro(
  { onScrollTo },
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
      <h1>Hi, I&apos;m Jack!</h1>
      <h2>I am a front-end developer who loves a good latte.</h2>
      <More className={style['more']} onClick={onScrollTo} />
    </section>
  )
})
