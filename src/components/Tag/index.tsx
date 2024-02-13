import type { JSX } from 'react'
import type { TagProps } from './types'
import style from './index.module.css'

/**
 * 标签
 * @param {TagProps} props component props
 * @param {TagProps['text']} props.text text
 * @returns {JSX.Element} the `Tag` component
 */
export const Tag = ({ text }: TagProps): JSX.Element => {
  return <div className={style['tag']}>{text}</div>
}
