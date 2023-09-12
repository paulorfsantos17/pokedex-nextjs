import { getPokemonColor } from '@/app/utils/getColorPokemon'

interface ITagTypes {
  type: string
}

export function TagType({ type }: ITagTypes) {
  const color = getPokemonColor(type)
  return (
    <div
      className="flex h-5 w-16 justify-center rounded-full border-[1px]"
      style={{ borderColor: color }}
    >
      <p className="text-[12px] capitalize" style={{ color: color }}>
        {type}
      </p>
    </div>
  )
}
