import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <main className='min-h-dvh flex flex-col justify-center items-center p-4'>
      <div className='bg-white rounded-2xl p-8 flex flex-col items-center gap-4 w-full max-w-md text-center'>
        <h1 className='text-6xl font-bold'>404</h1>
        <h2 className='text-2xl font-semibold text-gray-800'>Página não encontrada</h2>
        <p className='text-gray-700'>A página que você está tentando acessar não existe ou foi movida.</p>
        <button
          type='button'
          onClick={() => navigate('/')}
          className='bg-blue-600 text-white rounded-lg hover:bg-blue-700 px-6 py-2 transition-colors cursor-pointer'
        >
          Voltar para o inicio
        </button>
      </div>
    </main>
  )
}
