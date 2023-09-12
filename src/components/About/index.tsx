import React from 'react'
import LabelInfo from '../LabelInfo'
import { PokemonAbout } from '@/interfaces/PokemonView'
interface IAbout {
  about: PokemonAbout
}

export default function About({ about }: IAbout) {
  return (
    <div className="m-10 flex flex-col justify-center gap-5">
      <LabelInfo title="Species" description={about.species} />
      <LabelInfo title="Height" description={String(about.height)} />
      <LabelInfo title="Weight" description={String(about.weight)} />
      <LabelInfo title="Abilities" description={about.abilities.join(', ')} />
    </div>
  )
}
