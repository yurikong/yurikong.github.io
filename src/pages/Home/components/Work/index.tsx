import type { JSX } from 'react'
import { WorkCards } from '..'
import style from './index.module.css'

/**
 * 工作
 * @returns {JSX.Element} the `Work` component
 */
export default function Work(): JSX.Element {
  return (
    <section className={style['work']}>
      <header className={style['title']}>Work</header>
      <WorkCards />
    </section>
  )
}
