import type { JSX } from 'react'
import { Intro, About, Work, Projects } from './index.ts'

export const Component = (): JSX.Element => {
  return (
    <>
      <Intro />
      <About />
      <Work />
      <Projects />
    </>
  )
}

Component.displayName = 'Home'
