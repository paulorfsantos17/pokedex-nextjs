import { getPokemonColor } from '@/app/utils/getColorPokemon'
import React from 'react'

interface IBgMobileTop {
  type: string
}
export default function BgMobileTop({ type }: IBgMobileTop) {
  return (
    <div className="relative h-[40vh] md:hidden">
      <div
        className="absolute left-[-10%]  h-full w-[120%] rounded-b-[35%]"
        style={{ backgroundColor: getPokemonColor(type) }}
      ></div>
    </div>
  )
}
