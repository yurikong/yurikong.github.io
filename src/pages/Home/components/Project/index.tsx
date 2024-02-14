import { type JSX, forwardRef } from 'react'
import type { ProjectProps } from './types'
import { ProjectItemList } from '../ProjectItemList'
import { More } from '@/components'
import style from './index.module.css'

export type { ProjectProps }

/**
 * 项目
 * @param {ProjectProps} props component props
 * @param {ProjectProps['scrollIntoViewRef']} props.scrollIntoViewRef target ref to call `scrollIntoView`
 * @returns {JSX.Element} the `Project` component
 */
export const Project = forwardRef<HTMLElement | null, ProjectProps>(
  function Project({ scrollIntoViewRef }, ref): JSX.Element {
    return (
      <section className={style['project']} ref={ref}>
        <header className={style['title']}>Projects</header>
        <ProjectItemList />
        <More className={style['more']} scrollIntoViewRef={scrollIntoViewRef} />
      </section>
    )
  }
)
