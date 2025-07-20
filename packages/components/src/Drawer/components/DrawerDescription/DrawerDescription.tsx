import { type ComponentProps } from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { cn } from '@torr-app/utils';

export type DrawerDescriptionProps = ComponentProps<
  typeof DrawerPrimitive.Description
>;

export const DrawerDescription = ({
  className,
  ...props
}: DrawerDescriptionProps) => {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  );
};

DrawerDescription.displayName = 'DrawerDescription';
