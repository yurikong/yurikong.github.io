import type { MouseEventHandler } from 'react'

export interface MoreProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  className?: string | undefined
}
