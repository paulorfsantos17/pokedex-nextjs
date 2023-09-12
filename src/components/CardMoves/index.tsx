import React from 'react'
import TitleCars from '../TitleCards'
import { TagType } from '../TagType'
import BaseCardTransparentBlur from '../BaseCardTransparentBlur'
import TagMoves from '../TagMoves'
import { CardViewMove } from '@/interfaces/PokemonView'
interface IMoveCard {
  move: CardViewMove
}

export default function CardMoves({ move }: IMoveCard) {
  return (
    <BaseCardTransparentBlur>
      <div className="flex w-full justify-around p-7">
        <div className="flex  w-1/2  flex-col gap-4">
          <TitleCars title={move.name} textSize="md" />
          <div className="flex flex-col gap-1">
            <TagMoves title="Power" stats={move.power} />
            <TagMoves title="PP" stats={move.pp} />
            <TagMoves title="Accuracy" stats={move.accuracy} />
          </div>
        </div>
        <div className="flex  w-1/2 flex-col items-end justify-start gap-5">
          <p className="w-full text-right text-base font-bold text-slate-800 dark:text-neutral-50">
            #{move.id}
          </p>
          <TagType type={move.type} />
        </div>
      </div>
    </BaseCardTransparentBlur>
  )
}
