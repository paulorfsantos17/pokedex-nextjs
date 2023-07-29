import React from 'react'
import Image from 'next/image'
import { TagType } from '../TagType'

export default function CardUniquePokemon() {
  return (
    <div className="absolute z-50  flex  w-screen flex-col items-center md:hidden">
      <h2 className="mr-6 self-end text-2xl font-bold text-neutral-50">#001</h2>
      <Image
        className="mb-auto mt-[15%] h-[25vh]"
        width={230}
        height={160}
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
        alt="pokemon"
      />
      <h1 className="text-3xl font-bold text-slate-800 dark:text-neutral-50">
        Bulbasaur
      </h1>
      <div className="mt-2 flex w-screen justify-center gap-10">
        <TagType />
        <TagType />
      </div>
    </div>
  )
}
