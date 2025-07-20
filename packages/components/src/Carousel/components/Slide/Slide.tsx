import type { ReactNode } from 'react';
import { cn } from '@torr-app/utils';

import { Details } from '../Details';

import style from './Slide.module.css';

type SlideProps<Slide> = {
  slide: Slide;
  details?: ReactNode;
};

export const Slide = <Slide,>(props: SlideProps<Slide>) => {
  const { details, slide } = props;

  return (
    <div className={style.slide}>
      <div className={style.parallax}>
        <div id="parallax__layer" className={style.parallax__layer}>
          <img
            loading="lazy"
            alt="Your alt text"
            className={cn(style.slide__img, style.parallax__img)}
            src={`https://image.tmdb.org/t/p/original/${slide}`}
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>

      <Details details={details} />
    </div>
  );
};

Slide.displayName = 'Slide';
