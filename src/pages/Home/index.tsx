import { type JSX, useRef } from 'react'
import type { ScrollToRef } from './types'
import {
  type IntroRef,
  type WorkRef,
  type ProjectRef,
  type AboutRef,
  Intro,
  Work,
  Project,
  About,
} from './components'

/**
 * 首页
 * @returns {JSX.Element} `HomePage` 组件
 */
export const Component = (): JSX.Element => {
  const introRef = useRef<IntroRef | null>(null)
  const workRef = useRef<WorkRef | null>(null)
  const projectRef = useRef<ProjectRef | null>(null)
  const aboutRef = useRef<AboutRef | null>(null)

  /**
   * 滚动到指定组件
   * @param {ScrollToRef} ref 目标组件的ref
   */
  const scrollToRef = (ref: ScrollToRef): void => {
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
        onScrollToRef={() => {
          scrollToRef(workRef)
        }}
      />
      <Work
        ref={workRef}
        onScrollToRef={() => {
          scrollToRef(projectRef)
        }}
        scrollToProject={scrollToProject}
      />
      <Project
        ref={projectRef}
        onScrollToRef={() => {
          scrollToRef(introRef)
        }}
      />
      <About ref={aboutRef} />
    </>
  )
}

Component.displayName = 'HomePage'
