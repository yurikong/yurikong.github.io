import { type JSX, forwardRef, useImperativeHandle } from 'react'
import { ProjectItem, type ProjectItemProps } from '../ProjectItem'
import type { NamedProjectItemRef, ProjectItemListRef } from './types'
import style from './index.module.css'

export type { NamedProjectItemRef, ProjectItemListRef }

/**
 * 项目列表
 * @returns {JSX.Element} `ProjectItemList` 组件
 */
export const ProjectItemList = forwardRef<ProjectItemListRef>(
  function ProjectItemList(_props, ref): JSX.Element {
    // 项目数据
    const data: ProjectItemProps[] = [
      {
        imgName: 'sdpc.png',
        details: {
          name: 'Sacmi Digital Printer Client',
          description:
            "Desktop application for digital printing on ceramic tiles using Dimatix Starfire printheads and Meteor's PrintEngine SDK.",
          techStack: ['Electron', 'Typescript', 'Vue'],
        },
      },
      {
        imgName: 'sdpc.png',
        details: {
          name: 'COA Generator',
          description:
            'Desktop client for generating Certificate of Analysis in an analytical testing laboratory.',
          techStack: ['Flutter'],
        },
      },
      {
        imgName: 'sdpc.png',
        details: {
          name: 'Digifly',
          description:
            'Data visualization web app with 7 pages presented on 9 large screens in a bank lobby.',
          techStack: ['Javascript', 'Vue'],
        },
      },
      {
        imgName: 'sdpc.png',
        details: {
          name: 'Big Data Management Platform',
          description: 'CRM on the web. For bank internal use only.',
          techStack: ['Javascript', 'Vue'],
        },
      },
    ]

    // 项目组件的引用
    const projectItemRefs = data.map<NamedProjectItemRef>(
      (it: ProjectItemProps) => {
        return {
          name: it.details.name,
          ref: null,
        }
      }
    )

    // 暴露给父组件的方法
    useImperativeHandle(
      ref,
      () => {
        return {
          /**
           * 滚动到指定项目
           * @param {string} projectName 项目名称
           * @param {boolean | ScrollIntoViewOptions | undefined} arg 滚动选项
           */
          scrollToProjectItem(
            projectName: string,
            arg?: boolean | ScrollIntoViewOptions | undefined
          ): void {
            const namedRef = projectItemRefs.find(
              ({ name }) => name === projectName
            )
            namedRef?.ref?.scrollIntoView(arg)
          },
        }
      },
      [projectItemRefs]
    )

    return (
      <ul>
        {data.map<JSX.Element>((item: ProjectItemProps, i: number) => (
          <ProjectItem
            className={style['project-item']}
            key={i}
            ref={(ref) => (projectItemRefs[i].ref = ref)}
            {...item}
          />
        ))}
      </ul>
    )
  }
)
