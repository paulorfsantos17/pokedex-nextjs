'use client'

import React, { useState } from 'react'
import About from '@/components/About'
import BaseStats from '@/components/BaseStats'
import Tabs from '@/components/Tabs'
import Moves from '@/components/Moves'
import Evolutions from '@/components/Evolutions'

type TabSeletedType = 0 | 1 | 2 | 3

const tabContent = {
  0: <About />,
  1: <BaseStats />,
  2: <Evolutions />,
  3: <Moves />,
}

export default function ContentTabs() {
  const [tabSeleted, setTabSeleted] = useState<TabSeletedType>(0)
  return (
    <div>
      <div className="mx-8 my-2">
        <ul className="flex w-full justify-between">
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
      <div>{tabContent[tabSeleted]}</div>
    </div>
  )
}
