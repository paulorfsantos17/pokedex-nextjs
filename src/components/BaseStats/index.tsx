import React from 'react'
import TagStats from '../TagStats'
import { PokemonBaseStats } from '@/interfaces/PokemonView'

interface IBaseStats {
  baseStats: PokemonBaseStats
}

export default function BaseStats({ baseStats }: IBaseStats) {
  return (
    <div className="flex flex-col gap-3 p-10">
      <TagStats stats={baseStats.hp} title="HP" />
      <TagStats stats={baseStats.atk} title="ATK" />
      <TagStats stats={baseStats.def} title="DEF" />
      <TagStats stats={baseStats.satk} title="SATK" />
      <TagStats stats={baseStats.sdef} title="SDEF" />
      <TagStats stats={baseStats.spd} title="SPD" />
    </div>
  )
}
