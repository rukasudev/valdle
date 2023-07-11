'use client'

import { createContext, useContext } from 'react'

export type CarouselCurrentGameContextType = {
  currentGame: number
  setCurrentGame: (gameId: number) => void
}

export const CarouselCurrentGameContext = createContext<
  CarouselCurrentGameContextType | undefined
>(undefined)

export const useThemeContext = () => {
  const context = useContext(CarouselCurrentGameContext)

  if (!context) {
    throw new Error('useThemeContext must be used inside the ThemeProvider')
  }

  return context
}
