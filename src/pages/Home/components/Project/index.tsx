import { type JSX, forwardRef, useRef, useImperativeHandle } from 'react'
import type { ProjectRef } from './types'
import { ProjectItemList, type ProjectItemListRef } from '../ProjectItemList'
import { StickyHeader, BackTop } from '@/components'
import style from './index.module.css'

export type { ProjectRef }

/**
 * 项目
 * @returns {JSX.Element} `Project` 组件
 */
export const Project = forwardRef<ProjectRef>(
  function Project(_, ref): JSX.Element {
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

          {/* 滚动到最顶部 */}
          <BackTop className={style['back-top']} />
        </div>
      </section>
    )
  }
)
