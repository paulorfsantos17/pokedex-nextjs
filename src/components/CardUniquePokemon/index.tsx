import React from 'react'
import Image from 'next/image'
import { TagType } from '../TagType'
import { ICardUniquePokemon, PokemonCardView } from '@/interfaces/PokemonView'

export default function CardUniquePokemon({
  aboutPokemonCard,
}: ICardUniquePokemon) {
  const { id, image, name, types } = aboutPokemonCard
  let imageString

  if (typeof image === 'string') {
    imageString = image
  } else {
    imageString = 'error'
  }

  return (
    <div className="hidden h-full w-full flex-col items-center gap-10 py-2 min-[500px]:flex">
      <h2 className="mr-6 self-end text-2xl font-bold text-neutral-50">
        #{id}
      </h2>
      <div className="flex flex-col items-center">
        <Image
          className="mb-auto max-h-[300px] max-w-sm"
          width={340}
          height={240}
          src={imageString}
          alt="pokemon"
        />
        <h1 className="text-3xl font-bold capitalize text-slate-800 dark:text-neutral-50">
          {name}
        </h1>
        <div className="mt-2 flex  justify-center gap-10">
          {typeof types === 'string' ? (
            <TagType type={types} />
          ) : (
            types.map((type: string, indice: number) => (
              <TagType type={type} key={indice} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}
