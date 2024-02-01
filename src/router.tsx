import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '@/layouts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        lazy: () => import('@/pages/Home'),
      },
      {
        path: 'about',
        lazy: () => import('@/pages/About'),
      },
      {
        path: 'work',
        lazy: () => import('@/pages/Work'),
      },
      {
        path: 'contact',
        lazy: () => import('@/pages/Contact'),
      },
    ],
  },
])

export default router
