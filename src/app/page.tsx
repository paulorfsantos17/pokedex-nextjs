import { Card, ICard } from '@/components/Card'
import Input from '@/components/Input/input'
import { api } from '../lib/api'

export default async function Home() {
  const response = await api.get('pokemons')
  const data = response.data

  return (
    <div className="p-5">
      <main className="flex flex-col items-center md:p-4">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-[32px] font-bold leading-relaxed text-primary-light dark:text-white md:text-lg">
            Qual Pokémon você está procurando?
          </h2>
          <Input />
        </div>
        <div className=" mt-10 flex flex-col flex-wrap items-center justify-start gap-4 md:flex-row">
          {data.pokemons.map((pokemon: ICard) => (
            <Card
              id={pokemon.id}
              image={pokemon.image}
              name={pokemon.name}
              types={pokemon.types}
              key={pokemon.id}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
