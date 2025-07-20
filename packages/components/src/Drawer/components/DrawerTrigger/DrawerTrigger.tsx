import { type ComponentProps } from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';

export type DrawerTriggerProps = ComponentProps<typeof DrawerPrimitive.Trigger>;

export const DrawerTrigger = ({ ...props }: DrawerTriggerProps) => {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
};

DrawerTrigger.displayName = 'DrawerTrigger';
