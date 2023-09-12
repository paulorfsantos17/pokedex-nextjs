import React from 'react'
import Image from 'next/image'
import { TagType } from '../TagType'
import { ICardUniquePokemon } from '@/interfaces/PokemonView'

export default function CardUniquePokemonMobile({
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
    <div className="absolute z-50  flex  w-screen flex-col items-center  min-[500px]:hidden [@media(max-height:780px)]:top-[5rem] ">
      <h2 className="mr-6 self-end text-2xl font-bold  text-neutral-50">
        #{id}
      </h2>
      <Image
        className="] mb-auto mt-[15%] h-[25vh] [@media(max-height:780px)]:mt-0"
        width={230}
        height={160}
        src={imageString}
        alt="pokemon"
      />
      <h1 className="text-3xl font-bold capitalize text-slate-800 dark:text-neutral-50">
        {name}
      </h1>
      <div className="mt-2 flex w-screen justify-center gap-10">
        {typeof types === 'string' ? (
          <TagType type={types} />
        ) : (
          types.map((type: string, indice: number) => (
            <TagType type={type} key={indice} />
          ))
        )}
      </div>
    </div>
  )
}
