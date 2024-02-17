import type { JSX } from 'react'
import type { ImageProps } from './types'
import { getImageUrl } from '@/utils'
import style from './index.module.css'

export type { ImageProps }

/**
 * 图片
 * @param {ImageProps} props 组件入参
 * @param {ImageProps['name']} props.name assets目录下的图片名称
 * @param {ImageProps['alt']} [props.alt] 图片alt
 * @param {ImageProps['watermark']} [props.watermark] 水印
 * @param {ImageProps['watermarkText']} [props.watermarkText] 水印内容
 * @param {ImageProps['className']} [props.className] 组件样式
 * @returns {JSX.Element} `Image` 组件
 */
export const Image = ({
  name,
  alt,
  watermark = false,
  watermarkText = '',
  className = '',
}: ImageProps): JSX.Element => {
  const divClassName = `${
    watermark ? style['watermark'] : ''
  } ${className}`.trim()

  return (
    <div className={divClassName} data-watermark-text={watermarkText}>
      <img src={getImageUrl(name)} alt={alt} />
    </div>
  )
}
