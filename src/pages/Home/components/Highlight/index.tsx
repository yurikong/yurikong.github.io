import type { JSX } from 'react'
import style from './index.module.css'

/**
 * @returns {JSX.Element} Highlight section
 */
export default function Highlight(): JSX.Element {
  return (
    <section className={style['highlight']}>
      <h3>Work</h3>
    </section>
  )
}
