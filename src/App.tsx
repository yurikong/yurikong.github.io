import type { JSX } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from '@/router.tsx'

/**
 * @returns {JSX.Element} the `App` component
 */
export const App = (): JSX.Element => {
  return <RouterProvider router={router} />
}
