import { type JSX, forwardRef, useRef, useImperativeHandle } from 'react'
import type { ProjectItemProps, ProjectItemRef } from './types'
import { Image } from '@/components'
import { ProjectItemDetails } from '../ProjectItemDetails'
import style from './index.module.css'

export type { ProjectItemProps, ProjectItemRef }

/**
 * 项目
 * @param {ProjectItemProps} props 组件入参
 * @param {ProjectItemProps['imgName']} props.imgName 图片名称
 * @param {ProjectItemProps['details']} props.details 项目信息
 * @param {ProjectItemProps['className']} [props.className] 组件样式
 * @returns {JSX.Element} `ProjectItem` 组件
 */
export const ProjectItem = forwardRef<ProjectItemRef, ProjectItemProps>(
  function ProjectItem({ imgName, details, className = '' }, ref): JSX.Element {
    const projectItemRef = useRef<HTMLLIElement | null>(null)

    // 暴露给父组件的方法
    useImperativeHandle(
      ref,
      () => {
        return {
          /**
           * 滚动到当前项目
           * @param {boolean | ScrollIntoViewOptions | undefined} [arg] 滚动选项
           */
          scrollIntoView(
            arg?: boolean | ScrollIntoViewOptions | undefined
          ): void {
            projectItemRef.current?.scrollIntoView(arg)
          },
        }
      },
      []
    )

    const fullClassName = `${style['project-item']} ${className}`.trim()

    return (
      <li className={fullClassName} ref={projectItemRef}>
        {/* 项目图片 */}
        <Image
          className={style['image']}
          name={imgName}
          alt='cover'
          watermark
          watermarkText='Jianqiang Du'
        />

        {/* 项目信息 */}
        <ProjectItemDetails {...details} />
      </li>
    )
  }
)
