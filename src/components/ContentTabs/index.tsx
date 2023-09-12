'use client'

import React, { useState } from 'react'
import About from '@/components/About'
import BaseStats from '@/components/BaseStats'
import Tabs from '@/components/Tabs'
import Moves from '@/components/Moves'
import Evolutions from '@/components/Evolutions'
import {
  CardViewMove,
  PokemonAbout,
  PokemonBaseStats,
  PokemonCardView,
} from '@/interfaces/PokemonView'

type TabSeletedType = 0 | 1 | 2 | 3

interface IContentTab {
  about: PokemonAbout
  baseStats: PokemonBaseStats
  evolutions: PokemonCardView[]
  moves: CardViewMove[]
}

export default function ContentTabs({
  about,
  baseStats,
  evolutions,
  moves,
}: IContentTab) {
  const tabContent = {
    0: <About about={about} />,
    1: <BaseStats baseStats={baseStats} />,
    2: <Evolutions evolutions={evolutions} />,
    3: <Moves moves={moves} />,
  }
  const [tabSeleted, setTabSeleted] = useState<TabSeletedType>(0)
  return (
    <div className="h-full">
      <div className="mx-8 my-2">
        <ul className="flex w-full justify-between ">
          <Tabs
            title="About"
            isSeleted={tabSeleted === 0}
            onClick={() => setTabSeleted(0)}
          />
          <Tabs
            title="Base Stats"
            isSeleted={tabSeleted === 1}
            onClick={() => setTabSeleted(1)}
          />
          <Tabs
            title="Evolutions"
            isSeleted={tabSeleted === 2}
            onClick={() => setTabSeleted(2)}
          />
          <Tabs
            title="Moves"
            isSeleted={tabSeleted === 3}
            onClick={() => setTabSeleted(3)}
          />
        </ul>
      </div>
      <div className="h-[80%]">{tabContent[tabSeleted]}</div>
    </div>
  )
}
