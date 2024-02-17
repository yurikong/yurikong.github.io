import { type JSX, forwardRef, useRef, useImperativeHandle } from 'react'
import type { WorkProps, WorkRef } from './types'
import { StickyHeader, More } from '@/components'
import { WorkItemList } from '../WorkItemList'
import style from './index.module.css'

export type { WorkProps, WorkRef }

/**
 * 工作
 * @param {WorkProps} props 组件入参
 * @param {WorkProps['onScrollToRef']} props.onScrollToRef 处理 `More` 组件的 `onClick`
 * @param {WorkProps['scrollToProject']} props.scrollToProject 滚动到指定项目
 * @returns {JSX.Element} `Work` 组件
 */
export const Work = forwardRef<WorkRef, WorkProps>(function Work(
  { onScrollToRef, scrollToProject },
  ref
): JSX.Element {
  const workRef = useRef<HTMLElement | null>(null)

  // 暴露给组件的方法
  useImperativeHandle(
    ref,
    () => {
      return {
        /**
         * 滚动到当前组件
         * @param {boolean | ScrollIntoViewOptions | undefined} [arg] 滚动选项
         */
        scrollIntoView(
          arg?: boolean | ScrollIntoViewOptions | undefined
        ): void {
          workRef.current?.scrollIntoView(arg)
        },
      }
    },
    []
  )

  return (
    <section className={style['work']} ref={workRef}>
      {/* 标题 */}
      <StickyHeader title='Work' />

      <div className={style['content']}>
        {/* 工作列表 */}
        <WorkItemList scrollToProject={scrollToProject} />

        {/* 滚动到下个部分 */}
        <More className={style['more']} onClick={onScrollToRef} />
      </div>
    </section>
  )
})
