import { type JSX, forwardRef } from 'react'
import type { ProjectProps } from './types'
import { ProjectList } from '..'
import { More } from '@/components'
import style from './index.module.css'

/**
 * 项目
 * @param {ProjectProps} props component props
 * @param {ProjectProps['scrollIntoViewRef']} props.scrollIntoViewRef target ref to call `scrollIntoView`
 * @returns {JSX.Element} the `Project` component
 */
export const Project = forwardRef<HTMLElement | null, ProjectProps>(
  function Project({ scrollIntoViewRef }, ref): JSX.Element {
    return (
      <section className={style['projects']} ref={ref}>
        <header className={style['title']}>Projects</header>
        <ProjectList />
        <More className={style['more']} scrollIntoViewRef={scrollIntoViewRef} />
      </section>
    )
  }
)
