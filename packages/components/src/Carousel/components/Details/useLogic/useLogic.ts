import { type EmblaCarouselType, type EmblaEventType } from 'embla-carousel';
import { useCallback, useEffect, useRef } from 'react';

import { useCarouselContext } from '../../../context';

const TWEEN_FACTOR_BASE = 1;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

export const useLogic = () => {
  const { carouselApi } = useCarouselContext();
  const tweenFactor = useRef(0);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback(
    (carouselApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = carouselApi.internalEngine();
      const scrollProgress = carouselApi.scrollProgress();
      const slidesInView = carouselApi.slidesInView();
      const isScrollEvent = eventName === 'scroll';

      carouselApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const opacity = numberWithinRange(tweenValue, 0, 1).toString();
          const slideNode = carouselApi.slideNodes()[slideIndex];
          const detailNode = slideNode.querySelector('#details') as HTMLElement;

          detailNode.style.opacity = opacity;
        });
      });
    },
    [],
  );

  useEffect(() => {
    if (!carouselApi) return;

    setTweenFactor(carouselApi);
    tweenOpacity(carouselApi);

    carouselApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity);
  }, [carouselApi, tweenOpacity]);
};
