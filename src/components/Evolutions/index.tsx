import React, { use } from 'react'
import CardEvolutions from '../CardEvolutions'
import { PokemonCardView } from '@/interfaces/PokemonView'
import { useParams } from 'next/navigation'
interface IEvolution {
  evolutions: PokemonCardView[]
}

export default function Evolutions({ evolutions }: IEvolution) {
  const { id } = useParams()

  const findEvolutions = evolutions.filter(
    (evolution) => evolution.id !== Number(id),
  )
  return (
    <div className="mt-6 flex flex-col items-center justify-center gap-4">
      {findEvolutions.map((evolution) => (
        <CardEvolutions key={evolution.id} evolution={evolution} />
      ))}
    </div>
  )
}
