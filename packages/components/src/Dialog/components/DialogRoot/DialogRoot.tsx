import { ComponentProps } from 'react';
import { Root } from '@radix-ui/react-dialog';

export type DialogRootProps = ComponentProps<typeof Root>;

export const DialogRoot = ({ ...props }: DialogRootProps) => {
  return <Root data-slot="dialog" {...props} />;
};

DialogRoot.displayName = 'DialogRoot';
