import React from 'react'

interface ILabelInfo {
  title: string
  description: string
}

export default function LabelInfo({ title, description }: ILabelInfo) {
  return (
    <div className="flex w-full justify-start gap-14 text-start text-slate-800 dark:text-neutral-50">
      <h2 className="text-sm font-semibold  ">{title}</h2>
      <p className="text-sm font-bold">{description}</p>
    </div>
  )
}
