import { useState, type SubmitEvent } from 'react'
import useSignIn from '../hooks/useSignIn'
import { FiEye, FiEyeOff } from 'react-icons/fi'

export default function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { mutate: signIn, isPending } = useSignIn()

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const ds_login = formData.get('ds_login') as string
    const ds_senha = formData.get('ds_senha') as string
    signIn({ ds_login, ds_senha })
  }

  return (
    <main className='min-h-dvh flex justify-center items-center p-4'>
      <form onSubmit={handleSubmit} className='bg-white rounded-2xl p-8 w-full max-w-md flex flex-col items-center gap-4'>
        <h1 className='font-semibold text-2xl'>Acesso ao sistema</h1>

        <label htmlFor="login" className='w-full flex flex-col gap-2'>
          <span className='text-sm'>Login</span>
          <input
            required
            id='login'
            name='ds_login'
            type="text"
            placeholder='Digite seu login'
            className=' border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition'
          />
        </label>

        <label htmlFor="password" className='w-full flex flex-col gap-2'>
          <span className='text-sm'>Senha</span>
          <div className='relative flex items-center'>
            <input
              required
              id='password'
              name='ds_senha'
              type={showPassword ? 'text' : 'password'}
              placeholder='Digite sua senha'
              className=' border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition'
            />
            <button
              type="button"
              onClick={() => setShowPassword((prevState) => !prevState)}
              className="absolute right-2 p-2 text-gray-500 cursor-pointer"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </label>

        <button
          type="submit"
          disabled={isPending}
          className="w-full py-2.5 mt-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer"
        >
          {isPending ? 'Carregando...' : 'Entrar'}
        </button>
      </form>
    </main>
  )
}
