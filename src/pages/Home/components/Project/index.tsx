import { type JSX, forwardRef, useRef, useImperativeHandle } from 'react'
import type { ProjectProps, ProjectRef } from './types'
import { ProjectItemList } from '../ProjectItemList'
import { More } from '@/components'
import style from './index.module.css'

export type { ProjectProps, ProjectRef }

/**
 * 项目
 * @param {ProjectProps} props component props
 * @param {ProjectProps['onScrollTo']} props.onScrollTo click handler for scrolling to a `ref`
 * @returns {JSX.Element} the `Project` component
 */
export const Project = forwardRef<ProjectRef, ProjectProps>(function Project(
  { onScrollTo },
  ref
): JSX.Element {
  const projectRef = useRef<HTMLElement | null>(null)

  useImperativeHandle(
    ref,
    () => {
      return {
        scrollIntoView(arg) {
          projectRef.current?.scrollIntoView(arg)
        },
      }
    },
    []
  )

  return (
    <section className={style['project']} ref={projectRef}>
      <header className={style['title']}>Projects</header>
      <ProjectItemList />
      <More className={style['more']} onClick={onScrollTo} />
    </section>
  )
})
