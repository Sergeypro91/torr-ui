import { type ComponentProps } from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';

export type DrawerPortalProps = ComponentProps<typeof DrawerPrimitive.Portal>;

export const DrawerPortal = ({ ...props }: DrawerPortalProps) => {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
};

DrawerPortal.displayName = 'DrawerPortal';
