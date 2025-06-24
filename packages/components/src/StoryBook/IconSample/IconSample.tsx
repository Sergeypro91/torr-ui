import { PropsWithChildren } from 'react';

import { useCopy } from '../../Copy';
import { Icon, type IconNames } from '../../Icon';

import style from './IconSample.module.css';

type Props = PropsWithChildren & {
  name: IconNames;
};

export const IconSample = (props: Props) => {
  const { children, name } = props;
  const { isCopied, handleCopyToClipboard } = useCopy();
  const copyIcon: IconNames = isCopied ? 'copy-check' : 'copy';

  return (
    <button
      type="button"
      className={style['icon-sample']}
      onClick={handleCopyToClipboard(name)}
    >
      {children}
      <Icon
        id={copyIcon}
        size={16}
        data-is-copied={isCopied}
        className={style['icon']}
      />
      <span className={style['label']}>{name}</span>
    </button>
  );
};

IconSample.displayName = 'IconSample';
