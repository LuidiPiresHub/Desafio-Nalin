import { useMutation } from '@tanstack/react-query'
import type { IForm, ILoginRes } from '../interfaces/login'
import { useNavigate } from 'react-router-dom'
import { api } from '../config/axios'
import { toast } from 'react-toastify'
import type { AxiosError } from 'axios'

export default function useSignIn() {
  const navigate = useNavigate()
  return useMutation({
    mutationKey: ['login'],
    mutationFn: async (params: IForm) => {
      const { data } = await api.get<ILoginRes>('/login', { params })
      return data.data[0];
    },
    onSuccess: (data) => {
      localStorage.setItem('login', JSON.stringify(data))
      navigate('/produtos')
    },
    onError: (error) => {
      if ((error as AxiosError).status === 403) {
        toast.error('Dados incorreto, tente novamente')
      } else {
        toast.error('Algo deu errado, tente novamente')
      }
    }
  })
}
