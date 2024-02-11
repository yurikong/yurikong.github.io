import { type JSX, useRef } from 'react'
import { Intro, Work } from './components'

/**
 * @returns {JSX.Element} the `HomePage` component
 */
export const Component = (): JSX.Element => {
  const introRef = useRef<HTMLElement | null>(null)
  const workRef = useRef<HTMLElement | null>(null)

  return (
    <>
      <Intro ref={introRef} scrollIntoViewRef={workRef} />
      <Work ref={workRef} scrollIntoViewRef={introRef} />
    </>
  )
}

Component.displayName = 'HomePage'
