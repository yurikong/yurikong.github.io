import type { JSX } from 'react'
import type { SocialLinkProps } from './types'
import { Link } from 'react-router-dom'
import style from './index.module.css'

export type { SocialLinkProps }

/**
 * 社交媒体链接
 * @param {SocialLinkProps} props component props
 * @param {SocialLinkProps['href']} props.href href
 * @param {SocialLinkProps['child']} props.child child to render
 * @param {SocialLinkProps['title']} props.title title, default is `undefined`
 * @param {SocialLinkProps['onClick']} props.onClick click handler, default is `undefined`
 * @param {SocialLinkProps['className']} props.className parent assigned className, default is `undefined`
 * @returns {JSX.Element} the `SocialLink` component
 */
export const SocialLink = ({
  title,
  child,
  href,
  onClick,
  className = '',
}: SocialLinkProps): JSX.Element => {
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
      {child}
    </Link>
  )
}
