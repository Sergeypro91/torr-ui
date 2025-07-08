import { EmblaCarouselType } from 'embla-carousel';
import { createContext, type ReactNode, useContext } from 'react';

type CarouselContextProps = {
  slideList: string[];
  detailsList?: ReactNode[];
  carouselApi?: EmblaCarouselType;
};

export const CarouselContext = createContext<undefined | CarouselContextProps>(
  undefined,
);

export const useCarouselContext = () => {
  const context = useContext(CarouselContext);

  if (context === undefined) {
    throw new Error('useCarousel must be used within a CarouselContext');
  }

  return context;
};
