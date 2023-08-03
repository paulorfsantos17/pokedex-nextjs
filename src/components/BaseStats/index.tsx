import React from 'react'
import TagStats from '../TagStats'

export default function BaseStats() {
  return (
    <div className="flex flex-col gap-3 p-10">
      <TagStats stats={60} title="HP" />
      <TagStats stats={80} title="ATK" />
      <TagStats stats={80} title="HP" />
      <TagStats stats={60} title="HP" />
      <TagStats stats={60} title="HP" />
      <TagStats stats={60} title="HP" />
    </div>
  )
}
