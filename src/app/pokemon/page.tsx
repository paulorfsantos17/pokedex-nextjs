import BgMobileTop from '@/components/BgMobileTop'
import CardUniquePokemon from '@/components/CardUniquePokemon'
import CardUniquePokemonMobile from '@/components/CardUniquePokemonMobile'
import ContentTabs from '@/components/ContentTabs'

export default function PokemonDetails() {
  return (
    <>
      <div className="absolute top-0 -z-10 flex h-screen w-full flex-col justify-between overflow-hidden dark:bg-zinc-900 min-[500px]:hidden">
        <BgMobileTop />
        <div className="h-[47vh] w-screen  rounded-t-[20px] bg-lime-400 md:hidden">
          <ContentTabs />
        </div>
      </div>
      <CardUniquePokemonMobile />

      <div className="mx-auto my-10 hidden max-h-[500px] w-[90%] items-center  rounded-xl  bg-stone-300 dark:bg-zinc-700 min-[500px]:flex  min-[500px]:flex-col min-[500px]:justify-start md:flex-row">
        <div className="flex h-full w-[100%] items-center justify-center">
          <CardUniquePokemon />
        </div>
        <div className="h-[500px] w-full rounded-b-xl bg-lime-500  md:rounded-none md:rounded-r-xl">
          <ContentTabs />
        </div>
      </div>
    </>
  )
}
