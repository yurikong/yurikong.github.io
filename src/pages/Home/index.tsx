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
   * 滚动当前组件
   * @param {ScrollToRef} ref target ref
   */
  const handleScrollTo = (ref: ScrollToRef): void => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  /**
   * 滚动到指定项目
   * @param {string} projectName 项目名称
   */
  const scrollToProject = (projectName: string): void => {
    projectRef.current?.scrollToProject(projectName, { behavior: 'smooth' })
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
        scrollToProject={scrollToProject}
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
