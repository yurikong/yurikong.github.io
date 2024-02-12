import type { JSX } from 'react'
import type { ExternalLinkProps } from './types'
import { Link } from 'react-router-dom'
import RiExternalLinkLine from '~icons/ri/external-link-line'
import style from './index.module.css'

/**
 * 外部链接
 * @param {ExternalLinkProps} props component props
 * @param {ExternalLinkProps['to']} props.to href
 * @param {ExternalLinkProps['text']} props.text link text
 * @returns {JSX.Element} the `ExternalLink` component
 */
export const ExternalLink = ({ to, text }: ExternalLinkProps): JSX.Element => {
  return (
    <Link
      className={style['external-link']}
      to={to}
      target='_blank'
      referrerPolicy='no-referrer'
    >
      <span>{text}</span>
      <RiExternalLinkLine />
    </Link>
  )
}
