import { FC } from 'react';
import { LoadingOutlineMd } from '@torr-app/icons/src';

import style from './RenderIcon.module.css';

type Props = {
  isLoading: boolean;
  Icon?: FC;
};

export const RenderIcon = ({ isLoading, Icon }: Props) => {
  switch (true) {
    case isLoading && !!Icon:
      return <LoadingOutlineMd className={style.loader} />;
    case !!Icon:
      return <Icon />;
    default:
      return null;
  }
};

RenderIcon.displayName = 'RenderIcon';
