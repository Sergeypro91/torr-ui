import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useRef } from 'react';

type UseLogicProps = {
  options?: EmblaOptionsType;
  parallaxFactor?: number;
};

export const useLogic = ({ options, parallaxFactor = 0.5 }: UseLogicProps) => {
  const [carousel, carouselApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const setTweenNodes = useCallback((carouselApi: EmblaCarouselType): void => {
    tweenNodes.current = carouselApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('#parallax__layer') as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((carouselApi: EmblaCarouselType) => {
    tweenFactor.current = parallaxFactor * carouselApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback(
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

          const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `translateX(${translate}%)`;
        });
      });
    },
    [],
  );

  useEffect(() => {
    if (!carouselApi) return;

    setTweenNodes(carouselApi);
    setTweenFactor(carouselApi);
    tweenParallax(carouselApi);

    carouselApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('slideFocus', tweenParallax);
  }, [carouselApi, tweenParallax]);

  return {
    carouselApi,
    carousel,
  };
};
