import React from 'react'
interface ITab {
  title: string
  isSeleted: boolean
  onClick: () => void
}
export default function ({ title, isSeleted, onClick }: ITab) {
  return (
    <li
      className={`font-semibol text-base text-slate-800 dark:text-neutral-50
      ${
        isSeleted &&
        'border-b-4 border-slate-800 font-bold dark:border-neutral-50'
      }
      `}
      onClick={onClick}
    >
      {title}
    </li>
  )
}
