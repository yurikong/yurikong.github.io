import type { JSX } from 'react'
import type { AppLinkProps } from './types'
import { Link } from 'react-router-dom'
import RiLinksLine from '~icons/ri/links-line'
import RiExternalLinkLine from '~icons/ri/external-link-line'
import style from './index.module.css'

export type { AppLinkProps }

/**
 * 应用链接
 * @param {AppLinkProps} props component props
 * @param {AppLinkProps['external']} [props.external] external link, default is `false`
 * @param {AppLinkProps['text']} props.text text
 * @param {AppLinkProps['to']} [props.to] href, required when `external` is `true`
 * @param {AppLinkProps['onClick']} [props.onClick] click handler
 * @returns {JSX.Element} the `AppLink` component
 */
export const AppLink = ({
  external = false,
  text,
  to,
  onClick,
}: AppLinkProps): JSX.Element => {
  return (
    <Link
      className={style['app-link']}
      to={external ? to! : '#'}
      target={external ? '_blank' : '_self'}
      referrerPolicy='no-referrer'
      onClick={onClick}
    >
      {!external && <RiLinksLine />}
      <span>{text}</span>
      {external && <RiExternalLinkLine />}
    </Link>
  )
}
