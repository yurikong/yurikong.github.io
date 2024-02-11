import type { MutableRefObject } from 'react'

/**
 * 平滑滚动到元素
 * @param {MutableRefObject<HTMLElement | null>} ref DOM ref
 */
export const scrollIntoView = (
  ref: MutableRefObject<HTMLElement | null>
): void => {
  if (!ref.current) {
    return
  }
  ref.current.scrollIntoView({ behavior: 'smooth' })
}
