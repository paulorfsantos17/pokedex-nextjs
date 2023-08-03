import React from 'react'
import BaseCardTransparentBlur from '../BaseCardTransparentBlur'
import Image from 'next/image'
import { TagType } from '../TagType'
import TitleCars from '../TitleCards'

export default function CardEvolutions() {
  return (
    <BaseCardTransparentBlur>
      <div className="flex">
        <Image
          className="h-3/4 w-[45%]"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png"
          height={220}
          width={320}
          alt="pokemon"
        />
        <div className="flex  w-full flex-col gap-6 p-3">
          <TitleCars title="Ivysaur" positionCenter={true} />
          <div className="flex justify-center gap-2">
            <TagType type="normal" />
          </div>
        </div>
      </div>
    </BaseCardTransparentBlur>
  )
}
