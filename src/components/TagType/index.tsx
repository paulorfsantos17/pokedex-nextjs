interface ITagTypes {
  type: string
}

export function TagType({ type }: ITagTypes) {
  return (
    <div className="flex h-5 w-16 justify-center rounded-full border-[1px] border-type-grass-border">
      <p className="text-[12px] capitalize text-type-grass-border">{type}</p>
    </div>
  )
}
