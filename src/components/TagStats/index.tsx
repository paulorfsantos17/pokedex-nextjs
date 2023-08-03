import React from 'react'
import ProgressBar from '../ProgressBar'
interface ITagStats {
  title: string
  stats: number
}
export default function TagStats({ title, stats }: ITagStats) {
  return (
    <div className=" flex  justify-between  text-base font-bold text-slate-800  dark:text-neutral-50">
      <p>{title}</p>
      <div className="flex w-[80%] items-center gap-2">
        <p>{stats}</p>
        <ProgressBar percentage={100} />
      </div>
    </div>
  )
}
