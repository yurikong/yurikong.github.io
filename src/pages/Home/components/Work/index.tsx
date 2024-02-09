import type { JSX } from 'react'
import style from './index.module.css'
import { WorkCard } from '..'

/**
 * @returns {JSX.Element} Work section
 */
export default function Work(): JSX.Element {
  return (
    <section className={style['work']}>
      <header className={style['title']}>Work</header>
      <WorkCard />
    </section>
  )
}
