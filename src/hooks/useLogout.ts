import { useNavigate } from 'react-router-dom'

export default function useLogout() {
  const navigate = useNavigate()

  const logout = (): void => {
    localStorage.clear()
    navigate('/')
  }

  return { logout }
}
