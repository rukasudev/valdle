import { DefaultCarousel } from '../components/DefaultCarousel'
import { HomeTitle } from '../components/HomeTitle'
import { Games } from '../types'

const items: Games[] = [
  { id: '1', name: 'Guess the Bundle', description: 'Descrição jogo 1' },
  { id: '2', name: 'Guess the Map', description: 'Descrição jogo 2' },
  { id: '3', name: 'Guess the Voice', description: 'Descrição jogo 3' },
]

export default function Home() {
  return (
    <>
      <main className="absolute z-10 grid grid-cols-5">
        <section className="relative col-start-1 col-end-3 flex flex-col justify-center">
          <HomeTitle items={items}/>
        </section>

        <section className="col-start-3 col-end-6 pb-10 pt-24">
          <DefaultCarousel games={items} />
        </section>
      </main>

      <div className="relative z-0 grid min-h-screen grid-cols-5">
        <div className="col-start-1 col-end-4 bg-gray-800">1</div>
        <div className="col-start-4 col-end-6 bg-red-100">2</div>
      </div>
    </>
  )
}
