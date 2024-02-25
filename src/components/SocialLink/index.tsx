import type { JSX } from 'react'
import type { SocialLinkProps } from './types'
import { Link } from 'react-router-dom'
import style from './index.module.css'

export type { SocialLinkProps }

/**
 * 社交媒体链接
 * @param {SocialLinkProps} props 组件入参
 * @param {SocialLinkProps['href']} props.href href
 * @param {SocialLinkProps['title']} [props.title] 标题
 * @param {SocialLinkProps['children']} [props.children] 默认插槽内容
 * @param {SocialLinkProps['onClick']} [props.onClick] 处理 `onClick` 事件
 * @param {SocialLinkProps['className']} [props.className] 组件样式
 * @returns {JSX.Element} `SocialLink` 组件
 */
export const SocialLink = ({ title, children, href, onClick, className = '' }: SocialLinkProps): JSX.Element => {
  const linkClassName = `${style['social-link']} ${className}`.trim()

  return (
    <Link
      className={linkClassName}
      to={href}
      target='_blank'
      referrerPolicy='no-referrer'
      title={title}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
