'use client'

import { getPokemonColor } from '@/app/utils/getColorPokemon'
import BgMobileTop from '@/components/BgMobileTop'
import CardUniquePokemon from '@/components/CardUniquePokemon'
import CardUniquePokemonMobile from '@/components/CardUniquePokemonMobile'
import ContentTabs from '@/components/ContentTabs'
import { PokemonView } from '@/interfaces/PokemonView'
import { api } from '@/lib/api'
import { useParams } from 'next/navigation'

export default async function PokemonDetails() {
  const { id } = useParams()
  const response = await api.get(`pokemon/${id}`)
  const pokemonDate: PokemonView = response.data
  const type = pokemonDate.AboutBase.types[0]
  return (
    <>
      <div className="absolute top-0 -z-10 flex h-screen w-full flex-col justify-between overflow-hidden dark:bg-zinc-900 min-[500px]:hidden">
        <BgMobileTop type={type} />
        <div
          style={{ backgroundColor: getPokemonColor(type) }}
          className="h-[47vh] w-screen rounded-t-[20px]  md:hidden"
        >
          <ContentTabs
            about={pokemonDate.About}
            baseStats={pokemonDate.BaseStats}
            moves={pokemonDate.Moves}
            evolutions={pokemonDate.Evolutions}
          />
        </div>
      </div>
      <CardUniquePokemonMobile aboutPokemonCard={pokemonDate.AboutBase} />

      <div className="mx-auto my-10 hidden max-h-[500px] w-[90%] items-center  rounded-xl  bg-stone-300 dark:bg-zinc-700 min-[500px]:flex  min-[500px]:flex-col min-[500px]:justify-start md:flex-row">
        <div className="flex h-full w-[100%] items-center justify-center">
          <CardUniquePokemon aboutPokemonCard={pokemonDate.AboutBase} />
        </div>
        <div
          style={{ backgroundColor: getPokemonColor(type) }}
          className="h-[500px] w-full rounded-b-xl md:rounded-none md:rounded-r-xl"
        >
          <ContentTabs
            about={pokemonDate.About}
            baseStats={pokemonDate.BaseStats}
            moves={pokemonDate.Moves}
            evolutions={pokemonDate.Evolutions}
          />
        </div>
      </div>
    </>
  )
}
