import React from 'react'

interface ITagMoves {
  title: string
  stats: number
}

export default function TagMoves({ stats, title }: ITagMoves) {
  return (
    <div className="flex  justify-between text-slate-800 dark:text-neutral-50">
      <p className="h-4 text-sm font-bold">{title}</p>
      <p className="self-end text-sm  font-semibold text-opacity-75">{stats}</p>
    </div>
  )
}
