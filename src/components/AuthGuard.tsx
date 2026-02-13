import { Navigate, Outlet } from 'react-router-dom'
import type { IAuth } from '../interfaces/auth'

interface IAuthGuardProps {
  isProtected: boolean
}

export default function AuthGuard({ isProtected }: IAuthGuardProps) {
  const loginData: IAuth | null = JSON.parse(localStorage.getItem('login')!)
  
  const isAuthenticated = !!loginData

  if (loginData && Date.now() > loginData.expires_in) {
    localStorage.removeItem('login')
    return <Navigate to='/' replace />
  }

  if (isProtected) {
    return isAuthenticated ? <Outlet /> : <Navigate to='/' replace />
  }

  return isAuthenticated ? <Navigate to='/produtos' replace /> : <Outlet />
}
