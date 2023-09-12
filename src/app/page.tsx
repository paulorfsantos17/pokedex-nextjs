'use client'

import { Card, ICard } from '@/components/Card'
import Input from '@/components/Input/input'
import { api } from '../lib/api'
import { useEffect, useState } from 'react'

export default function Home() {
  const [listPokemons, setListPokemons] = useState<ICard[]>([])
  const handleGetPokemons = async () => {
    const response = await api.get('pokemons')
    const data = response.data
    setListPokemons(listPokemons.concat(data.pokemons))
  }

  useEffect(() => {
    handleGetPokemons()
  }, [])
  return (
    <div className="p-5">
      <main className="flex  flex-col items-center justify-center md:p-4">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-[32px] font-bold leading-relaxed text-primary-light dark:text-white md:text-lg">
            Qual Pokémon você está procurando?
          </h2>
          <Input />
        </div>
        <div className="mt-10 flex   flex-wrap items-center justify-center gap-4 px-8 md:flex-row lg:justify-start">
          {listPokemons.map((pokemon: ICard) => (
            <Card
              id={pokemon.id}
              image={pokemon.image}
              name={pokemon.name}
              types={pokemon.types}
              key={pokemon.id}
            />
          ))}
        </div>
        <button
          className="mt-4 rounded bg-green-400 p-2 font-semibold text-white"
          onClick={handleGetPokemons}
        >
          Carregar mais pokemons
        </button>
      </main>
    </div>
  )
}
