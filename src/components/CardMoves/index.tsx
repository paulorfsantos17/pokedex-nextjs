import React from 'react'
import TitleCars from '../TitleCards'
import { TagType } from '../TagType'
import BaseCardTransparentBlur from '../BaseCardTransparentBlur'
import TagMoves from '../TagMoves'

export default function CardMoves() {
  return (
    <BaseCardTransparentBlur>
      <div className="flex w-full justify-around p-7">
        <div className="flex  w-1/2  flex-col gap-4">
          <TitleCars title="Vine-whip" />
          <div className="flex flex-col gap-1">
            <TagMoves title="Power" stats={80} />
            <TagMoves title="PP" stats={80} />
            <TagMoves title="Accuracy" stats={80} />
          </div>
        </div>
        <div className="flex  w-1/2 flex-col items-end justify-start gap-5">
          <p className="w-full text-right text-base font-bold text-slate-800 dark:text-neutral-50">
            #001
          </p>
          <TagType />
        </div>
      </div>
    </BaseCardTransparentBlur>
  )
}
