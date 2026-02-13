import axios from 'axios'
import type { IAuth } from '../interfaces/auth'

const baseURL = import.meta.env.VITE_API_URL

export const api = axios.create({ baseURL })

api.interceptors.request.use((config) => {
  const loginData: IAuth | null = JSON.parse(localStorage.getItem('login')!)

  if (loginData) {
    config.headers.Authorization = `Bearer ${loginData.token}`
  }

  return config
})