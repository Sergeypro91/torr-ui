import { PropsWithChildren, ReactNode, useMemo } from 'react';

import { Dialog } from '../Dialog';
import { Drawer } from '../Drawer';

export type DialogDrawerProps = PropsWithChildren & {
  trigger: ReactNode;
  actions: { secondary: ReactNode[]; close: ReactNode };
} & (
    | {
        header?: ReactNode;
        title?: never;
        description?: never;
      }
    | {
        header?: never;
        title?: string;
        description?: string;
      }
  );

export const DialogDrawer = (props: DialogDrawerProps) => {
  const isMobile = useMemo(() => {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  }, []);

  return isMobile ? <Drawer {...props} /> : <Dialog {...props} />;
};

DialogDrawer.displayName = 'DialogDrawer';
