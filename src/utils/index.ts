/**
 * 获取本地图片路径
 * @param {string} name 图片名称
 * @returns {string} 图片路径
 */
export const getImageUrl = (name: string): string => {
  return new URL(`../assets/${name}`, import.meta.url).href
}
