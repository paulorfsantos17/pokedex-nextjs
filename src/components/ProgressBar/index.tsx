import React from 'react'

interface IProgressBar {
  percentage: number
}

export default function ProgressBar({ percentage }: IProgressBar) {
  return (
    <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
      <div
        className={`h-2.5  rounded-full bg-lime-800`}
        style={{ width: percentage + '%' }}
      ></div>
    </div>
  )
}
