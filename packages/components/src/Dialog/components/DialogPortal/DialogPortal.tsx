import { type ComponentProps } from 'react';
import { Portal } from '@radix-ui/react-dialog';

export type DialogPortalProps = ComponentProps<typeof Portal>;

export const DialogPortal = ({ ...props }: DialogPortalProps) => {
  return <Portal data-slot="dialog-portal" {...props} />;
};

DialogPortal.displayName = 'DialogPortal';
