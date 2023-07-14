'use client'

import type { FlowbiteCarouselTheme } from 'flowbite-react'
import { Carousel } from 'flowbite-react'
import { useCarouselCurrentGame } from '../hooks/useCarousel'
import { Games } from '../types'

const customTheme: FlowbiteCarouselTheme = {
  root: {
    base: 'relative h-full w-full grid grid-cols-[2fr_60px_2fr] grid-rows-1 justify-center',
    leftControl:
      'relative col-start-1 row-start-2 justify-self-end bg-zinc-900',
    rightControl: 'relative col-start-3 justify-self-start bg-zinc-900',
  },
  indicators: {
    active: {
      off: 'bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800',
      on: 'bg-white dark:bg-gray-800',
    },
    base: 'h-3 w-3',
    wrapper: 'relative col-start-2 space-x-3',
  },
  item: {
    base: 'relative top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2',
    wrapper: 'w-full flex-shrink-0 transform cursor-grab snap-center',
  },
  control: {
    base: 'inline-flex h-8 w-8 items-center justify-center sm:h-10 sm:w-10',
    icon: 'h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6',
  },
  scrollContainer: {
    base: 'flex h-full snap-mandatory overflow-y-hidden pb-6 overflow-x-scroll scroll-smooth rounded-lg col-span-3',
    snap: 'snap-x',
  },
}

type CarouselProps = {
  games: Games[]
}

export function DefaultCarousel({ games }: CarouselProps) {
  const { currentGame, setCurrentGame } = useCarouselCurrentGame()

  return (
    <>
      <Carousel
        theme={customTheme}
        onSlideChange={(slideIdx) => setCurrentGame(slideIdx)}
        slide={false}
        indicators={false}
      >
        {games.map((game) => {
          return (
            <div
              key={game.id}
              className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
            >
              {game.name} {currentGame + 1}/{games.length}
            </div>
          )
        })}
      </Carousel>
    </>
  )
}
