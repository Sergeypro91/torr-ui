import { type ComponentProps } from 'react';
import { cn } from '@torr-app/utils';

export type DialogHeaderProps = ComponentProps<'div'>;

export const DialogHeader = ({ className, ...props }: DialogHeaderProps) => {
  return (
    <div
      data-slot="dialog-header"
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      {...props}
    />
  );
};

DialogHeader.displayName = 'DialogHeader';
