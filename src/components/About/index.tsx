import React from 'react'
import LabelInfo from '../LabelInfo'

export default function About() {
  return (
    <div className="m-10 flex flex-col justify-center gap-5">
      <LabelInfo title="Species" description="Seed" />
      <LabelInfo title="Height" description="0,70cm" />
      <LabelInfo title="Weight" description="6,9kg" />
      <LabelInfo title="Abilities" description="Overgrow, Chlorophyl" />
    </div>
  )
}
