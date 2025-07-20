import { type ComponentProps } from 'react';
import { cn } from '@torr-app/utils';

export type DialogFooterProps = ComponentProps<'div'>;

export const DialogFooter = ({ className, ...props }: DialogFooterProps) => {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
        className,
      )}
      {...props}
    />
  );
};

DialogFooter.displayName = 'DialogFooter';
