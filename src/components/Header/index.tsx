'use client'

import React, { useContext } from 'react'
import { HambuguerMenu } from '../HambugerMenu'
import SwitchMode from '../SwitchMode'
import { ThemeContext } from '@/contexts/ThemeContext'

export function Header() {
  const { theme } = useContext(ThemeContext)
  return (
    <header className="z-20 flex items-center  justify-between bg-transparent  p-5 md:z-[100] md:h-12  md:justify-end md:bg-stone-300 md:dark:bg-neutral-700">
      <HambuguerMenu />
      <SwitchMode />
    </header>
  )
}
