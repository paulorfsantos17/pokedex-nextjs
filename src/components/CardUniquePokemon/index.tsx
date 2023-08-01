import React from 'react'
import Image from 'next/image'
import { TagType } from '../TagType'

export default function CardUniquePokemon() {
  return (
    <div className="hidden h-full w-full flex-col items-center gap-10 py-2 min-[500px]:flex">
      <h2 className="mr-6 self-end text-2xl font-bold text-neutral-50">#001</h2>
      <div className="flex flex-col items-center">
        <Image
          className="0 mb-auto"
          width={340}
          height={240}
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
          alt="pokemon"
        />
        <h1 className="text-3xl font-bold text-slate-800 dark:text-neutral-50">
          Bulbasaur
        </h1>
        <div className="mt-2 flex  justify-center gap-10">
          <TagType />
          <TagType />
        </div>
      </div>
    </div>
  )
}
