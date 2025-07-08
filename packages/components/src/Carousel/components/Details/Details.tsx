import { type ReactNode } from 'react';

import style from './Details.module.css';
import { useLogic } from './useLogic';

type DetailsProps = {
  details: ReactNode;
};

export const Details = (props: DetailsProps) => {
  const { details } = props;

  useLogic();

  return (
    <div className={style.details}>
      <div id="details">{details}</div>
    </div>
  );
};

Details.displayName = 'Details';
