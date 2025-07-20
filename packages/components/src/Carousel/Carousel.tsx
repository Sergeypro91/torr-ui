import { EmblaOptionsType } from 'embla-carousel';
import { type CSSProperties, type ReactNode } from 'react';
import { getKey } from '@torr-app/utils';

import style from './Carousel.module.css';
import { Nav, Slide } from './components';
import { CarouselContext } from './context';
import { useParallaxScroll } from './hooks';
import { useLogic } from './useLogic';

type CarouselProps = {
  slideList: string[];
  detailsList?: ReactNode[];
  options?: EmblaOptionsType;
  ratio?: string;
  parallaxScroll?: boolean;
};

export const Carousel = (props: CarouselProps) => {
  const {
    slideList,
    detailsList,
    options = { loop: true },
    ratio = 2 / 3,
    parallaxScroll = false,
  } = props;

  const { carouselApi, carousel } = useLogic({
    options,
  });

  const { parallaxOffset } = useParallaxScroll(parallaxScroll);

  const elementStyle = {
    '--ratio': ratio,
    '--parallax-offset': `${Math.round(parallaxOffset)}px`,
  } as CSSProperties;

  return (
    <CarouselContext value={{ slideList, detailsList, carouselApi }}>
      <section className={style.carousel} style={elementStyle}>
        <div className={style.viewport} ref={carousel}>
          <div className={style.container}>
            {slideList.map((slide, index) => {
              return (
                <Slide
                  key={getKey({ index })}
                  slide={slide}
                  details={detailsList?.[index]}
                />
              );
            })}
          </div>
        </div>

        <Nav />
      </section>
    </CarouselContext>
  );
};

Carousel.displayName = 'Carousel';
