import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    lazy: async () => await import('@/layouts/AppLayout/app-layout.tsx'),
    children: [
      {
        index: true,
        lazy: async () => await import('@/pages/Home'),
      },
    ],
  },
])
