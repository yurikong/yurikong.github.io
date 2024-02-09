import type { JSX } from 'react'
import { Work, Intro } from './components'

/**
 * @returns {JSX.Element} Home page
 */
export function Component(): JSX.Element {
  return (
    <>
      <Intro />
      <Work />
    </>
  )
}

Component.displayName = 'HomePage'
