import { createRoot } from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { ToastContainer } from 'react-toastify'
import './index.css'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <>
    <QueryClientProvider client={queryClient} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
    <ToastContainer />
  </>
)
