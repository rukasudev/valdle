'use client'

import DefaultCarousel from '@/components/DefaultCarousel'
import { Games } from '../types'
import { useThemeContext } from '../context'

const items: Games[] = [
  { id: '1', name: 'Guess the Bundle', description: 'Descrição jogo 1' },
  { id: '2', name: 'Guess the Map', description: 'Descrição jogo 2' },
  { id: '3', name: 'Guess the Voice', description: 'Descrição jogo 3' },
]

export default function Home() {
  const context = useThemeContext()

  return (
    <>
      <main className="absolute z-10 grid min-h-screen min-w-full grid-cols-5">
        <section className="relative col-start-1 col-end-3 flex flex-col justify-center">
          <div className="relative flex flex-col justify-between p-8 text-gray-50">
            <h2>{items[context.currentGame].name}</h2>
            <hr />
            <p>{items[context.currentGame].description}</p>
          </div>
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
