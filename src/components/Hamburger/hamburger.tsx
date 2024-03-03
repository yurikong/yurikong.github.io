import type { JSX } from 'react'
import RiMenuLine from '~icons/ri/menu-line'
import './hamburger.css'

interface Props {
  className?: string | undefined
}

export const Hamburger = ({ className = '' }: Props): JSX.Element => {
  const elClassName = `hamburger ${className}`.trim()

  return (
    <i className={elClassName}>
      <RiMenuLine />
    </i>
  )
}
