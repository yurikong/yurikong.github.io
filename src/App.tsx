import type { JSX } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from '@/router.tsx'

/**
 * @returns {JSX.Element} `App` 组件
 */
export const App = (): JSX.Element => {
  return <RouterProvider router={router} />
}
