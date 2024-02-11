import { type JSX, forwardRef } from 'react'
import type { IntroProps } from './types'
import { More } from '@/components'
import style from './index.module.css'

/**
 * 开场白
 * @param {IntroProps} props component props
 * @param {IntroProps['scrollIntoViewRef']} props.scrollIntoViewRef target ref to call `scrollIntoView`
 * @returns {JSX.Element} the `Intro` component
 */
export const Intro = forwardRef<HTMLElement | null, IntroProps>(function Intro(
  { scrollIntoViewRef },
  ref
): JSX.Element {
  return (
    <section className={style['intro']} ref={ref}>
      <h1>Hi, I&apos;m Jack!</h1>
      <h2>I am a front-end developer who loves a good latte.</h2>
      <More className={style['more']} scrollIntoViewRef={scrollIntoViewRef} />
    </section>
  )
})
