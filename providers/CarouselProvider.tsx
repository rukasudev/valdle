"use client";

import { CarouselCurrentGameProvider } from "../hooks/useCarousel";

interface UserProviderProps {
  children: React.ReactNode;
}

const CarouselProvider: React.FC<UserProviderProps> = ({
  children
}) => {
  return ( 
    <CarouselCurrentGameProvider>
      {children}
    </CarouselCurrentGameProvider>
   );
}
 
export default CarouselProvider;
