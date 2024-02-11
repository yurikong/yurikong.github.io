import { type JSX, forwardRef } from 'react'
import type { WorkProps } from './types'
import { WorkList } from '..'
import { More } from '@/components'
import style from './index.module.css'

/**
 * 工作
 * @param {WorkProps} props component props
 * @param {WorkProps['scrollIntoViewRef']} props.scrollIntoViewRef target ref to call `scrollIntoView`
 * @returns {JSX.Element} the `Work` component
 */
export const Work = forwardRef<HTMLElement | null, WorkProps>(function Work(
  { scrollIntoViewRef },
  ref
): JSX.Element {
  return (
    <section className={style['work']} ref={ref}>
      <header className={style['title']}>Work</header>
      <WorkList />
      <More className={style['more']} scrollIntoViewRef={scrollIntoViewRef} />
    </section>
  )
})
