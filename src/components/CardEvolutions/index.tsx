import React from 'react'
import BaseCardTransparentBlur from '../BaseCardTransparentBlur'
import Image from 'next/image'
import { TagType } from '../TagType'
import TitleCars from '../TitleCards'
import { PokemonCardView } from '@/interfaces/PokemonView'
interface ICardEvolutions {
  evolution: PokemonCardView
}

export default function CardEvolutions({ evolution }: ICardEvolutions) {
  const { id, image, name, types } = evolution
  let imageString

  if (typeof image === 'string') {
    imageString = image
  } else {
    imageString = 'error'
  }
  return (
    <BaseCardTransparentBlur>
      <div className="m-2 flex items-center justify-center">
        <Image
          className="h-3/4 max-h-[60%] max-w-[40%]"
          src={imageString}
          height={220}
          width={320}
          alt="pokemon"
        />
        <div className="flex  w-full flex-col gap-6 p-3">
          <TitleCars title={name} positionCenter={true} />
          <div className="flex justify-center gap-2">
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
    </BaseCardTransparentBlur>
  )
}
