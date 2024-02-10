import type { JSX } from 'react'
import { Intro, Work } from './components'

/**
 * @returns {JSX.Element} the `HomePage` component
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
