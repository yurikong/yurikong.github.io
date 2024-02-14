import { type JSX, forwardRef, useRef, useImperativeHandle } from 'react'
import type { WorkProps, WorkRef } from './types'
import { WorkItemList } from '../WorkItemList'
import { More } from '@/components'
import style from './index.module.css'

export type { WorkProps, WorkRef }

/**
 * 工作
 * @param {WorkProps} props 组件入参
 * @param {WorkProps['onScrollTo']} props.onScrollTo 处理 `More` 组件的 `onClick`
 * @param {WorkProps['scrollToProject']} props.scrollToProject 滚动到指定项目
 * @returns {JSX.Element} the `Work` component
 */
export const Work = forwardRef<WorkRef, WorkProps>(function Work(
  { onScrollTo, scrollToProject },
  ref
): JSX.Element {
  const workRef = useRef<HTMLElement | null>(null)

  useImperativeHandle(
    ref,
    () => {
      return {
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
      <header className={style['title']}>Work</header>
      <WorkItemList scrollToProject={scrollToProject} />
      <More className={style['more']} onClick={onScrollTo} />
    </section>
  )
})
