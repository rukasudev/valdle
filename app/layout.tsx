'use client'

import { ReactNode, useState } from 'react'
import './globals.css'
import {
  CarouselCurrentGameContextType,
  CarouselCurrentGameContext,
} from '../context'

export default function RootLayout({ children }: { children: ReactNode }) {
  const [currentGame, setCurrentGame] =
    useState<CarouselCurrentGameContextType['currentGame']>(0)

  return (
    <html lang="en">
      <body>
        <h1 className="absolute top-0 p-6 text-gray-50">Valdle</h1>
        <CarouselCurrentGameContext.Provider
          value={{ currentGame, setCurrentGame }}
        >
          {children}
        </CarouselCurrentGameContext.Provider>
      </body>
    </html>
  )
}
