import React from 'react'

interface IProgressBar {
  percentage: number
}

export default function ProgressBar({ percentage }: IProgressBar) {
  const getColor = (percentage: number): string => {
    let color
    if (percentage <= 30) {
      color = '#B81D13'
    } else if (percentage <= 50) {
      color = '#EFB700'
    } else {
      color = '#008450'
    }

    return color
  }
  return (
    <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
      <div
        className={`h-2.5  rounded-full `}
        style={{
          width: percentage + '%',
          backgroundColor: getColor(percentage),
        }}
      ></div>
    </div>
  )
}
