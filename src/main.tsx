import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '@/App.tsx'
import 'normalize.css'
import '@/styles/reset.css'
import '@/styles/index.css'

const rootEl: HTMLElement = document.getElementById('root')!

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
