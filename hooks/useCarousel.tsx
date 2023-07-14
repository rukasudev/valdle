import { createContext, useContext, useState } from 'react'

export type CarouselCurrentGameContextType = {
  currentGame: number
  setCurrentGame: (gameId: number) => void
}

export const CarouselCurrentGameContext = createContext<
  CarouselCurrentGameContextType | undefined
>(undefined)


export interface Props {
  [propName: string]: any;
}

export const CarouselCurrentGameProvider = (props: Props) => {
  const [currentGame, setCurrentGame] =
  useState<CarouselCurrentGameContextType['currentGame']>(0)

  const value = {
    currentGame,
    setCurrentGame
  };

  return <CarouselCurrentGameContext.Provider value={value} {...props} />;
}

export const useCarouselCurrentGame = () => {
  const context = useContext(CarouselCurrentGameContext)

  if (!context) {
    throw new Error('useThemeContext must be used inside the ThemeProvider')
  }

  return context
}
