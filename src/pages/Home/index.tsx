import { type JSX, useRef } from 'react'
import { Intro, Work, Project } from './components'

/**
 * @returns {JSX.Element} the `HomePage` component
 */
export const Component = (): JSX.Element => {
  const introRef = useRef<HTMLElement | null>(null)
  const workRef = useRef<HTMLElement | null>(null)
  const projectRef = useRef<HTMLElement | null>(null)

  return (
    <>
      <Intro ref={introRef} scrollIntoViewRef={workRef} />
      <Work ref={workRef} scrollIntoViewRef={projectRef} />
      <Project ref={projectRef} scrollIntoViewRef={introRef} />
    </>
  )
}

Component.displayName = 'HomePage'
