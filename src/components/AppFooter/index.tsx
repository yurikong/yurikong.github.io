import type { JSX } from 'react'
import { SocialLink, type SocialLinkProps } from '@/components'
import RiCopyrightLine from '~icons/ri/copyright-line'
import RiMailLine from '~icons/ri/mail-line'
import RiGithubLine from '~icons/ri/github-line'
import RiWechatLine from '~icons/ri/wechat-line'
import RiReactjsLine from '~icons/ri/reactjs-line'
import style from './index.module.css'

/**
 * 页脚
 * @returns {JSX.Element} `AppFooter` 组件
 */
export const AppFooter = (): JSX.Element => {
  const year = new Date().getFullYear()
  const socialLinks: SocialLinkProps[] = [
    {
      href: 'mailto:jackdu2013@163.com',
      title: 'Email',
      children: <RiMailLine />,
    },
    {
      href: 'https://github.com/yurikong',
      title: 'Github',
      children: <RiGithubLine />,
    },
    {
      href: '#',
      title: 'Wechat',
      children: <RiWechatLine />,
      onClick: (e): void => {
        e.preventDefault()
        // TODO
      },
    },
  ]

  return (
    <footer className={style['footer']}>
      {/* 版权 */}
      <div className={style['copyright']}>
        <RiCopyrightLine />
        <span>{year}</span>
        <span>Jianqiang Du</span>
      </div>

      {/* 社交平台 */}
      <ul className={style['social-links']}>
        {socialLinks.map<JSX.Element>((item: SocialLinkProps, i: number) => (
          <li key={i}>
            <SocialLink className={style['social-link']} {...item} />
          </li>
        ))}
      </ul>

      {/* 应用信息 */}
      <div className={style['info']}>
        <span>Site built with</span>

        <SocialLink title='React' href='https://react.dev'>
          <div className={style['react']}>
            <RiReactjsLine />
            <span>React.js</span>
          </div>
        </SocialLink>
      </div>
    </footer>
  )
}
