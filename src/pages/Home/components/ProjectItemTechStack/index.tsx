import type { JSX } from 'react'
import type { ProjectItemTagStackProps } from './types'
import type { TagProps } from '@/components/Tag/types'
import { Tag } from '@/components'

export const ProjectItemTechStack = ({
  data,
}: ProjectItemTagStackProps): JSX.Element => {
  const tagList: TagProps[] = data.map((text): TagProps => ({ text }))

  return (
    // TODO: finish styling tech stack
    <ul>
      {tagList.map((item: TagProps, i: number): JSX.Element => {
        return (
          <li key={i}>
            <Tag {...item} />
          </li>
        )
      })}
    </ul>
  )
}
