'use client'
import Image from 'next/image'
import { TagType } from '../TagType'
import Link from 'next/link'
import { getPokemonColor } from '@/app/utils/getColorPokemon'
import TitleCars from '../TitleCards'

export interface ICard {
  name: string
  id: string
  image: string
  types: string[]
}

export function Card({ name, id, image, types }: ICard) {
  const color = getPokemonColor(types[0])

  return (
    <Link href={`/pokemon/${id}`}>
      <div
        style={{ backgroundColor: color + '60', borderColor: color }}
        className={`flex h-40 w-80 max-w-[240px] items-center rounded-lg border-[2.5px]   px-1 pt-4 drop-shadow-lg`}
      >
        <Image
          className="mb-auto h-[80%]"
          width={90}
          height={70}
          src={image}
          alt={name}
        />
        <div className="flex h-full w-full flex-col p-4">
          <p className="self-end text-sm  text-slate-800 dark:text-neutral-50">
            #{id}
          </p>
          <TitleCars title={name} />
          <div className="flex flex-col gap-1">
            {types.map((type) => (
              <TagType type={type} key={type} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
