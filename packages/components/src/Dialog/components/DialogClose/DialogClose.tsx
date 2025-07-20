import { type ComponentProps } from 'react';
import { Close } from '@radix-ui/react-dialog';

export type DialogClose = ComponentProps<typeof Close>;

export const DialogClose = ({ ...props }: DialogClose) => {
  return <Close data-slot="dialog-close" {...props} />;
};

DialogClose.displayName = 'DialogClose';
