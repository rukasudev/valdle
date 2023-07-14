'use client'

import { useCarouselCurrentGame } from "../hooks/useCarousel"
import { Games } from "../types"

type Props = {
  items: Games[]
}

export function HomeTitle( { items }: Props) {
  const { currentGame } = useCarouselCurrentGame()
  
  return (
    <div className="relative flex flex-col justify-between p-8 text-gray-50">
      <h2>{items[currentGame].name}</h2>
      <hr />
      <p>{items[currentGame].description}</p>
    </div>
  )
}