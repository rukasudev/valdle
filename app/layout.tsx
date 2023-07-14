import { ReactNode } from 'react'
import CarouselProvider from '../providers/CarouselProvider'
import './globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html lang="en">
      <body className="h-full w-full">
        <h1 className="absolute top-0 p-6 text-gray-50">Valdle</h1>
          <CarouselProvider>
            {children}
          </CarouselProvider>
      </body>
    </html>
  )
}
