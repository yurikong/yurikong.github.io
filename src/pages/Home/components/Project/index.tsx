import { type JSX, forwardRef, useRef, useImperativeHandle } from 'react'
import type { ProjectProps, ProjectRef } from './types'
import { ProjectItemList, type ProjectItemListRef } from '../ProjectItemList'
import { StickyHeader, More } from '@/components'
import style from './index.module.css'

export type { ProjectProps, ProjectRef }

/**
 * 项目
 * @param {ProjectProps} props 组件入参
 * @param {ProjectProps['onScrollToRef']} props.onScrollToRef 处理 `More` 组件的 `onClick`
 * @returns {JSX.Element} `Project` 组件
 */
export const Project = forwardRef<ProjectRef, ProjectProps>(function Project(
  { onScrollToRef },
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
      {/* 标题 */}
      <StickyHeader title='Project' />

      <div className={style['content']}>
        {/* 项目列表 */}
        <ProjectItemList ref={projectItemListRef} />

        {/* 滚动到下个部分 */}
        <More className={style['more']} onClick={onScrollToRef} />
      </div>
    </section>
  )
})
