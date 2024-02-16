import type { ReactNode } from 'react'

export interface StickyHeaderProps {
  title?: string | undefined
  slots?: StickyHeaderChildren | undefined
  className?: string | undefined
}

interface StickyHeaderChildren {
  title?: ReactNode
  menu?: ReactNode
}
