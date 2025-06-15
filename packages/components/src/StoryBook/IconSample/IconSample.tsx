import { PropsWithChildren } from 'react';

import { type IconNames } from '../../Icon';

import style from './IconSample.module.css';
import { useLogic } from './useLogic';

type Props = PropsWithChildren & {
  name: IconNames;
};

export const IconSample = (props: Props) => {
  const { children, name } = props;

  const { isCopied, handleCopyToClipboard } = useLogic();

  return (
    <button
      type="button"
      className={style['icon-sample']}
      data-is-copied={isCopied}
      onClick={() => handleCopyToClipboard(name)}
    >
      {children}
      <span>{name}</span>
    </button>
  );
};

IconSample.displayName = 'IconSample';
