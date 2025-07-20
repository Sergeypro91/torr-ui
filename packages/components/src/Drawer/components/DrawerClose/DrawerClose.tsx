import { type ComponentProps } from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';

export type DrawerCloseProps = ComponentProps<typeof DrawerPrimitive.Close>;

export const DrawerClose = ({ ...props }: DrawerCloseProps) => {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
};

DrawerClose.displayName = 'DrawerClose';
