import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainLayout from './Layout/MainLayout.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Router/router.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient();


import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>

      </RouterProvider>
    </QueryClientProvider>


  </StrictMode>,
)
