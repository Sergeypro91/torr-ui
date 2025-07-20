import { type PropsWithChildren, type ReactNode } from 'react';

import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from './components';

export type DrawerProps = PropsWithChildren & {
  trigger: ReactNode;
  actions: { secondary: ReactNode[]; close: ReactNode };
} & (
    | {
        header?: ReactNode;
        title?: never;
        description?: never;
      }
    | {
        header?: never;
        title?: string;
        description?: string;
      }
  );

export const Drawer = (props: DrawerProps) => {
  const { trigger, header, title, description, children, actions } = props;

  return (
    <DrawerRoot>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            {header ?? (
              <>
                <DrawerTitle>{title}</DrawerTitle>
                <DrawerDescription>{description}</DrawerDescription>
              </>
            )}
          </DrawerHeader>
          {children}
          <DrawerFooter>
            <DrawerClose asChild>{actions.close}</DrawerClose>
            {actions.secondary}
          </DrawerFooter>
        </div>
      </DrawerContent>
    </DrawerRoot>
  );
};

Drawer.displayName = 'Drawer';

Drawer.DrawerClose = DrawerClose;
Drawer.DrawerContent = DrawerContent;
Drawer.DrawerDescription = DrawerDescription;
Drawer.DrawerFooter = DrawerFooter;
Drawer.DrawerHeader = DrawerHeader;
Drawer.DrawerOverlay = DrawerOverlay;
Drawer.DrawerPortal = DrawerPortal;
Drawer.DrawerTitle = DrawerTitle;
Drawer.DrawerRoot = DrawerRoot;
Drawer.DrawerTrigger = DrawerTrigger;
