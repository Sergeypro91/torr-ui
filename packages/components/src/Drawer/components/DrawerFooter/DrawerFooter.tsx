import { type ComponentProps } from 'react';
import { cn } from '@torr-app/utils';

export type DrawerFooterProps = ComponentProps<'div'>;

export const DrawerFooter = ({ className, ...props }: DrawerFooterProps) => {
  return (
    <div
      data-slot="drawer-footer"
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...props}
    />
  );
};

DrawerFooter.displayName = 'DrawerFooter';
