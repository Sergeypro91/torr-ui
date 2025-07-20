import { type ComponentProps } from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { cn } from '@torr-app/utils';

export type DrawerTitleProps = ComponentProps<typeof DrawerPrimitive.Title>;

export const DrawerTitle = ({ className, ...props }: DrawerTitleProps) => {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn('text-foreground font-semibold', className)}
      {...props}
    />
  );
};

DrawerTitle.displayName = 'DrawerTitle';
