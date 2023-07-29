import BgMobileTop from '@/components/BgMobileTop'
import CardUniquePokemon from '@/components/CardUniquePokemon'
import ContentTabs from '@/components/ContentTabs'

export default function PokemonDetails() {
  return (
    <>
      <div className="absolute top-0 z-0 flex h-[100vh] w-full flex-col justify-between overflow-hidden dark:bg-zinc-900">
        <BgMobileTop />
        <div className=" h-[47vh] w-screen  rounded-t-[20px] bg-lime-400 md:hidden">
          <ContentTabs />
        </div>
      </div>
      <CardUniquePokemon />
    </>
  )
}
