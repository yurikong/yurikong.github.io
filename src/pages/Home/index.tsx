import { type JSX, useRef } from 'react'
import type { ScrollToRef } from './types'
import {
  type IntroRef,
  type WorkRef,
  type ProjectRef,
  Intro,
  Work,
  Project,
} from './components'

/**
 * 首页
 * @returns {JSX.Element} the `HomePage` component
 */
export const Component = (): JSX.Element => {
  const introRef = useRef<IntroRef | null>(null)
  const workRef = useRef<WorkRef | null>(null)
  const projectRef = useRef<ProjectRef | null>(null)

  /**
   * 滚动
   * @param {ScrollToRef} ref target ref
   */
  const handleScrollTo = (ref: ScrollToRef): void => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Intro
        ref={introRef}
        onScrollTo={() => {
          handleScrollTo(workRef)
        }}
      />
      <Work
        ref={workRef}
        onScrollTo={() => {
          handleScrollTo(projectRef)
        }}
      />
      <Project
        ref={projectRef}
        onScrollTo={() => {
          handleScrollTo(introRef)
        }}
      />
    </>
  )
}

Component.displayName = 'HomePage'
