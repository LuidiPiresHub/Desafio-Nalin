import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Products from './pages/Products'
import AuthGuard from './components/AuthGuard'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<AuthGuard isProtected={false} />}>
        <Route path='/' element={<Login />} />
      </Route>
      <Route element={<AuthGuard isProtected={true} />}>
        <Route path='/produtos' element={<Products />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
