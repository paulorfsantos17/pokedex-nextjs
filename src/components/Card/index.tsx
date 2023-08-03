import Image from 'next/image'
import React from 'react'
import { TagType } from '../TagType'

export interface ICard {
  name: string
  id: string
  image: string
  types: string[]
}

export function Card({ name, id, image, types }: ICard) {
  return (
    <div className="flex h-40 w-80 max-w-[240px] items-center rounded-lg border-2  border-type-grass-border bg-type-grass px-1 pt-4 drop-shadow-lg ">
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
        <h3 className="mb-2 text-lg font-bold capitalize text-slate-800 dark:text-neutral-50">
          {name}
        </h3>
        <div className="flex flex-col gap-1">
          {types.map((type) => (
            <TagType type={type} key={type} />
          ))}
        </div>
      </div>
    </div>
  )
}
