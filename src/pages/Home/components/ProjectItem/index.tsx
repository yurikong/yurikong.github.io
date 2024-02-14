import { type JSX, forwardRef, useRef, useImperativeHandle } from 'react'
import type { ProjectItemProps, ProjectItemRef } from './types'
import { ProjectItemDetails } from '../ProjectItemDetails'
import style from './index.module.css'

export type { ProjectItemProps, ProjectItemRef }

/**
 * 项目
 * @param {ProjectItemProps} props component props
 * @param {ProjectItemProps['imgSrc']} props.imgSrc image url
 * @param {ProjectItemProps['details']} props.details details
 * @param {ProjectItemProps['className']} props.className parent assigned className, default is `undefined`
 * @returns {JSX.Element} the `ProjectItem` component
 */
export const ProjectItem = forwardRef<ProjectItemRef, ProjectItemProps>(
  function ProjectItem({ imgSrc, details, className = '' }, ref): JSX.Element {
    const projectItemRef = useRef<HTMLLIElement | null>(null)

    // 暴露给父组件的方法
    useImperativeHandle(
      ref,
      () => {
        return {
          /**
           * 滚动到当前项目
           * @param {boolean | ScrollIntoViewOptions | undefined} arg 滚动选项
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
        <div className={style['img-wrapper']}>
          <img src={imgSrc} alt='Project cover.' />
        </div>

        <ProjectItemDetails {...details} />
      </li>
    )
  }
)
