import { type JSX, forwardRef, useRef, useImperativeHandle } from 'react'
import type { WorkProps, WorkRef } from './types'
import { WorkItemList } from '../WorkItemList'
import { More } from '@/components'
import style from './index.module.css'

export type { WorkProps, WorkRef }

/**
 * 工作
 * @param {WorkProps} props component props
 * @param {WorkProps['onScrollTo']} props.onScrollTo click handler for scrolling to a `ref`
 * @returns {JSX.Element} the `Work` component
 */
export const Work = forwardRef<WorkRef, WorkProps>(function Work(
  { onScrollTo },
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
      <WorkItemList />
      <More className={style['more']} onClick={onScrollTo} />
    </section>
  )
})
