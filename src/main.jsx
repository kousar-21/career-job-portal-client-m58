import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router/Router'
import { RouterProvider } from 'react-router'
import AuthProvider from './contexts/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)
