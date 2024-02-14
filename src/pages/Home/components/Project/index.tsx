import { type JSX, forwardRef, useRef, useImperativeHandle } from 'react'
import type { ProjectProps, ProjectRef } from './types'
import { ProjectItemList, type ProjectItemListRef } from '../ProjectItemList'
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
  const projectItemListRef = useRef<ProjectItemListRef | null>(null)

  // 暴露给父组件的方法
  useImperativeHandle(
    ref,
    () => {
      return {
        /**
         * 滚动到该组件
         * @param {boolean | ScrollIntoViewOptions | undefined} arg 滚动选项
         */
        scrollIntoView(
          arg?: boolean | ScrollIntoViewOptions | undefined
        ): void {
          projectRef.current?.scrollIntoView(arg)
        },

        /**
         * 滚动到指定项目
         * @param {string} projectName 项目名称
         * @param {boolean | ScrollIntoViewOptions | undefined} arg 滚动选项
         */
        scrollToProject(
          projectName: string,
          arg?: boolean | ScrollIntoViewOptions | undefined
        ): void {
          projectItemListRef.current?.scrollToProjectItem(projectName, arg)
        },
      }
    },
    []
  )

  return (
    <section className={style['project']} ref={projectRef}>
      <header className={style['title']}>Projects</header>
      <ProjectItemList ref={projectItemListRef} />
      <More className={style['more']} onClick={onScrollTo} />
    </section>
  )
})
