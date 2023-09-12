import React from 'react'
import CardMoves from '../CardMoves'
import { CardViewMove } from '@/interfaces/PokemonView'
interface IMoves {
  moves: CardViewMove[]
}
export default function Moves({ moves }: IMoves) {
  return (
    <div className="mt-6 flex h-full  flex-col items-center justify-center gap-4 overflow-y-scroll scrollbar scrollbar-track-gray-400 scrollbar-thumb-gray-600 scrollbar-track-rounded-xl scrollbar-w-3 md:flex-row md:flex-wrap ">
      {moves.map((move) => (
        <CardMoves move={move} key={move.id} />
      ))}
    </div>
  )
}
