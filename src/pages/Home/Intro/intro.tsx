import type { JSX } from 'react'
import style from './intro.module.css'

export const Intro = (): JSX.Element => {
  return (
    <section className={style['intro']}>
      <h1>Hi, I&apos; Jack.</h1>
      <p>
        I am a front-end developer. I make software that looks good and is well built under the hood. I will become a
        digital nomad in the future.
      </p>
    </section>
  )
}
