import type { MutableRefObject } from 'react'
import type { IntroRef, WorkRef, ProjectRef } from './components'

export type ScrollToRef =
  | MutableRefObject<IntroRef | null>
  | MutableRefObject<WorkRef | null>
  | MutableRefObject<ProjectRef | null>
