import { ComponentProps } from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';

export type DrawerRootProps = ComponentProps<typeof DrawerPrimitive.Root>;

export const DrawerRoot = ({ ...props }: DrawerRootProps) => {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />;
};

DrawerRoot.displayName = 'DrawerRoot';
