'use client'
import React, { useContext } from 'react'
import { Moon, Sun } from 'lucide-react'
import { ThemeContext } from '@/contexts/ThemeContext'

export default function SwitchMode() {
  const theme = useContext(ThemeContext)
  return (
    <label className="relative z-20 inline-flex cursor-pointer items-center ">
      <input
        type="checkbox"
        value=""
        className="peer sr-only"
        onClick={theme.changeValue}
      />
      <div
        className={`peer flex h-7  w-16 items-center justify-between 
                    rounded-full bg-slate-800 after:absolute
                    after:left-[2px] after:top-[2px] after:h-6 
                    after:w-6 after:rounded-full after:bg-secondary-light after:transition-all after:content-[''] 
                    peer-checked:bg-primary-light peer-checked:after:translate-x-9 peer-checked:after:border-white peer-checked:after:bg-checked-light peer-focus:outline-none 
                  dark:border-gray-600 dark:bg-black`}
      >
        <Moon size={16} color="#fafafa" className="z-40 ml-[5px]" />
        <Sun size={16} color="#fafafa" className="z-40 mr-[5px]" />
      </div>
    </label>
  )
}
