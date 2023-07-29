'use client'

import React, { useContext } from 'react'
import { Header } from '../Header'
import { ThemeContext } from '@/contexts/ThemeContext'

export default function MainTheme({ children }: { children: React.ReactNode }) {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`${!theme && 'dark'}`}>
      <div className="relative z-20 h-full w-screen bg-white  dark:bg-zinc-800">
        <Header />
        {children}
      </div>
    </div>
  )
}
