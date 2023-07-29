import { Card } from '@/components/Card'
import Input from '@/components/Input/input'

export default function Home() {
  return (
    <div className=" p-5">
      <main className="flex flex-col items-center md:p-4">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-[32px] font-bold leading-relaxed text-primary-light dark:text-white md:text-lg">
            Qual Pokémon você está procurando?
          </h2>
          <Input />
        </div>
        <div className=" mt-10 flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div>
  )
}
