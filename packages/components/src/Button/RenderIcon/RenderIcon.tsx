// import style from './RenderIcon.module.css';

import { ReactNode } from 'react';

type Props = { isLoading: boolean; Icon?: ReactNode };

export const RenderIcon = ({ isLoading, Icon }: Props) => {
  switch (true) {
    case isLoading && !!Icon:
      // return <LoadingOutlineMd className={style.loader} />;
      return 'LOADING';
    case !!Icon:
      return Icon;
    default:
      return null;
  }
};

RenderIcon.displayName = 'RenderIcon';
