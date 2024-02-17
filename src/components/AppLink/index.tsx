import type { JSX } from 'react'
import type { AppLinkProps } from './types'
import { Link } from 'react-router-dom'
import RiLinksLine from '~icons/ri/links-line'
import RiExternalLinkLine from '~icons/ri/external-link-line'
import style from './index.module.css'

export type { AppLinkProps }

/**
 * 应用链接
 * @param {AppLinkProps} props 组件入参
 * @param {AppLinkProps['text']} props.text 显示内容
 * @param {AppLinkProps['to']} [props.to] 链接地址，当 `external` 为 `true` 时必须传入
 * @param {AppLinkProps['external']} [props.external] 是否外部链接
 * @param {AppLinkProps['onClick']} [props.onClick] 处理 `onClick` 事件
 * @returns {JSX.Element} `AppLink` 组件
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
