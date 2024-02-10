import type { JSX } from 'react'
import { More } from '@/components'
import style from './index.module.css'

/**
 * @returns {JSX.Element} the `Intro` component
 */
export const Intro = (): JSX.Element => {
  return (
    <section className={style['intro']}>
      <h1>Hi, I&apos;m Jack!</h1>
      <h2>I am a frontend developer who loves a good latte.</h2>
      <More className={style['more']} />
    </section>
  )
}
