import React from 'react'

interface IBaseCardTransparentBlur {
  children: React.ReactNode
}

export default function BaseCardTransparentBlur({
  children,
}: IBaseCardTransparentBlur) {
  return (
    <div className="h-40 w-72 rounded-lg bg-white bg-opacity-20 drop-shadow-lg ">
      {children}
    </div>
  )
}
