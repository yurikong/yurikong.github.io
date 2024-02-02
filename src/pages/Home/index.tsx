import type { JSX } from 'react'
import { Highlight, Intro } from './components'

/**
 * @returns {JSX.Element} Home page
 */
export function Component(): JSX.Element {
  return (
    <>
      <Intro />
      <Highlight />
    </>
  )
}

Component.displayName = 'Home'
