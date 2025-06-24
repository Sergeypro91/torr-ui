import { ComponentProps } from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { cn } from '@torr-app/utils';

export type DrawerProps = ComponentProps<typeof DrawerPrimitive.Root>;

export const Drawer = ({ ...props }: DrawerProps) => {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />;
};

Drawer.displayName = 'Drawer';

export type DrawerTriggerProps = ComponentProps<typeof DrawerPrimitive.Trigger>;

export const DrawerTrigger = ({ ...props }: DrawerTriggerProps) => {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
};

DrawerTrigger.displayName = 'DrawerTrigger';

export type DrawerPortalProps = ComponentProps<typeof DrawerPrimitive.Portal>;

export const DrawerPortal = ({ ...props }: DrawerPortalProps) => {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
};

DrawerPortal.displayName = 'DrawerPortal';

export type DrawerCloseProps = ComponentProps<typeof DrawerPrimitive.Close>;

export const DrawerClose = ({ ...props }: DrawerCloseProps) => {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
};

DrawerClose.displayName = 'DrawerClose';

export type DrawerOverlayProps = ComponentProps<typeof DrawerPrimitive.Overlay>;

export const DrawerOverlay = ({ className, ...props }: DrawerOverlayProps) => {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className,
      )}
      {...props}
    />
  );
};

DrawerOverlay.displayName = 'DrawerOverlay';

export type DrawerContentProps = ComponentProps<typeof DrawerPrimitive.Content>;

export const DrawerContent = ({
  className,
  children,
  ...props
}: DrawerContentProps) => {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          'group/drawer-content bg-background fixed z-50 flex h-auto flex-col',
          'data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b',
          'data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t',
          'data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm',
          'data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm',
          className,
        )}
        {...props}
      >
        <div className="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
};

DrawerContent.displayName = 'DrawerContent';

export type DrawerHeaderProps = ComponentProps<'div'>;

export const DrawerHeader = ({ className, ...props }: DrawerHeaderProps) => {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        'flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left',
        className,
      )}
      {...props}
    />
  );
};

DrawerHeader.displayName = 'DrawerHeader';

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
