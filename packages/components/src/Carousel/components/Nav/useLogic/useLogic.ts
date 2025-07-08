import { EmblaCarouselType } from 'embla-carousel/esm';
import { useCallback, useEffect, useState } from 'react';

import { useCarouselContext } from '../../../context';

export const useLogic = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [timer, setTimer] = useState<null | number>(null);
  const { carouselApi } = useCarouselContext();

  const onNavButtonClick = useCallback((carouselApi: EmblaCarouselType) => {
    carouselApi?.plugins()?.autoplay?.reset();
  }, []);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!carouselApi) return;

      carouselApi.scrollTo(index);
      onNavButtonClick(carouselApi);
    },
    [carouselApi, onNavButtonClick],
  );

  const onInit = useCallback((carouselApi: EmblaCarouselType) => {
    setScrollSnaps(carouselApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((carouselApi: EmblaCarouselType) => {
    setSelectedIndex(carouselApi.selectedScrollSnap());
  }, []);

  const onNext = useCallback((carouselApi: EmblaCarouselType) => {
    const { autoplay } = carouselApi?.plugins() ?? {};

    setTimer(autoplay?.timeUntilNext() ?? null);
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    onInit(carouselApi);
    onSelect(carouselApi);
    onNext(carouselApi);

    carouselApi
      .on('reInit', onInit)
      .on('reInit', onSelect)
      .on('select', onSelect)
      .on('autoplay:timerset', onNext);
  }, [carouselApi, onInit, onSelect, onNext]);

  return {
    timer,
    scrollSnaps,
    selectedIndex,
    onDotButtonClick,
  };
};
