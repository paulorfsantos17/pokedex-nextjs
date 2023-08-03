import { strict } from 'assert'
import React from 'react'

interface ITitleCards {
  title: string
  positionCenter?: boolean
}

export default function TitleCars({
  title,
  positionCenter = false,
}: ITitleCards) {
  return (
    <p
      className={`text-xl font-bold text-slate-800 dark:text-neutral-50 ${
        positionCenter && 'text-center'
      }`}
    >
      {title}
    </p>
  )
}
