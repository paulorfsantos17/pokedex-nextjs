import { strict } from 'assert'
import React from 'react'

interface ITitleCards {
  title: string
  positionCenter?: boolean
  textSize?: `xl` | `md`
}

export default function TitleCars({
  title,
  positionCenter = false,
  textSize = `xl`,
}: ITitleCards) {
  return (
    <p
      className={` font-bold capitalize text-slate-800 dark:text-neutral-50 ${
        positionCenter && 'text-center'
      } ${textSize === `xl` ? 'text-xl' : `text-md`}`}
    >
      {title}
    </p>
  )
}
