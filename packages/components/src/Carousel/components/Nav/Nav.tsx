import { CSSProperties } from 'react';
import { cn, getKey } from '@torr-app/utils/src';

import { DotButton } from '../DotButton';

import style from './Nav.module.css';
import { useLogic } from './useLogic';

export const Nav = () => {
  const { timer, selectedIndex, scrollSnaps, onDotButtonClick } = useLogic();

  const elementStyle = {
    '--timer': `${timer}ms`,
  } as CSSProperties;

  return (
    <div className={style.nav}>
      <div className={style.navbar}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={getKey({ index })}
            index={index}
            style={elementStyle}
            className={cn(
              style.dot,
              index === selectedIndex ? style['dot--selected'] : '',
            )}
            onClick={() => onDotButtonClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

Nav.displayName = 'Nav';
