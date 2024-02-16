/**
 * 获取本地图片路径
 * @param {string} name 图片名称
 * @returns {string} 图片路径
 */
export const getImageUrl = (name: string): string => {
  return new URL(`../assets/${name}`, import.meta.url).href
}

/**
 * 平滑滚动到最顶部
 */
export const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
