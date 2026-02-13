import { useQuery } from '@tanstack/react-query'
import { api } from '../config/axios'
import type { IProductRes } from '../interfaces/products'
import { useState, type ChangeEvent } from 'react'
import useLogout from '../hooks/useLogout'

export default function Products() {
  const { logout } = useLogout()
  const [filters, setFilters] = useState({
    codigo: '',
    descricao: '',
    departamento: ''
  })

  const [page, setPage] = useState<number>(1)
  const itensPerPage = 10

  const { data } = useQuery({
    queryKey: ['products'],
    retry: false,
    refetchOnWindowFocus: false,
    queryFn: async () => {
      const { data } = await api.get<IProductRes>('/produtos/listar')
      return data.data
    }
  })

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFilters((prevState) => ({ ...prevState, [name]: value }))
    setPage(1)
  }

  const filteredProducts = data?.filter((product) => {
    return (!filters.codigo || product.codigo === Number(filters.codigo)) &&
      (product.descricao.toLowerCase().includes(filters.descricao.toLowerCase())) &&
      (product.departamento.toLowerCase().includes(filters.departamento.toLowerCase()))
  })

  const start = (page - 1) * itensPerPage
  const paginatedProducts = filteredProducts?.slice(start, start + itensPerPage)


  const prevPage = () => {
    const firstPage = 1
    setPage((prevState) => prevState > firstPage ? prevState - 1 : prevState)
  }

  const nextPage = () => {
    const maxLength = filteredProducts?.length || 1
    const lastPage = Math.ceil(maxLength / itensPerPage)
    setPage((prevState) => prevState < lastPage ? prevState + 1 : prevState)
  }

  return (
    <main className='min-h-dvh p-4 flex flex-col gap-8'>
      <section className='flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-semibold text-gray-800'>Listagem de produtos</h1>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition cursor-pointer"
          >
            Sair
          </button>
        </div>
        <div className='bg-white p-5 rounded-2xl shadow grid grid-cols-1 md:grid-cols-3 gap-4'>
          <input
            type="number"
            placeholder="Filtrar por código"
            name='codigo'
            value={filters.codigo}
            onChange={handleFilterChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Filtrar por descrição"
            name='descricao'
            value={filters.descricao}
            onChange={handleFilterChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Filtrar por departamento"
            name='departamento'
            value={filters.departamento}
            onChange={handleFilterChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </section>

      <div className='overflow-x-auto shadow'>
        <table className='w-full text-left border-collapse'>
          <thead className="bg-gray-50 border-b border-gray-600">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                Código
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                Descrição
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                Departamento
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedProducts?.map((product) => (
              <tr key={product.codigo} className="border-b border-gray-600 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">{product.codigo}</td>
                <td className="px-6 py-4">{product.descricao}</td>
                <td className="px-6 py-4">{product.departamento}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='flex justify-center items-center p-4 font-bold select-none'>
          <button className='cursor-pointer py-2 px-6' onClick={prevPage}>Anterior</button>
          <span>{page}</span>
          <button className='cursor-pointer py-2 px-6' onClick={nextPage}>Proximo</button>
        </div>
      </div>
    </main>
  )
}
