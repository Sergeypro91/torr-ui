import { ComponentProps } from 'react';
import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from '@radix-ui/react-dialog';
import { cn } from '@torr-app/utils';

import { Icon } from '../Icon';

export type DialogProps = ComponentProps<typeof Root>;

export const Dialog = ({ ...props }: DialogProps) => {
  return <Root data-slot="dialog" {...props} />;
};

Dialog.displayName = 'Dialog';

export type DialogTriggerProps = ComponentProps<typeof Trigger>;

export const DialogTrigger = ({ ...props }: DialogTriggerProps) => {
  return <Trigger data-slot="dialog-trigger" {...props} />;
};

DialogTrigger.displayName = 'DialogTrigger';

export type DialogPortalProps = ComponentProps<typeof Portal>;

export const DialogPortal = ({ ...props }: DialogPortalProps) => {
  return <Portal data-slot="dialog-portal" {...props} />;
};

DialogPortal.displayName = 'DialogPortal';

export type DialogCloseProps = ComponentProps<typeof Close>;

export const DialogClose = ({ ...props }: DialogCloseProps) => {
  return <Close data-slot="dialog-close" {...props} />;
};

DialogClose.displayName = 'DialogClose';

export type DialogOverlayProps = ComponentProps<typeof Overlay>;

export const DialogOverlay = ({ className, ...props }: DialogOverlayProps) => {
  return (
    <Overlay
      data-slot="dialog-overlay"
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className,
      )}
      {...props}
    />
  );
};

DialogOverlay.displayName = 'DialogOverlay';

export type DialogContentProps = ComponentProps<typeof Content> & {
  showCloseButton?: boolean;
};

export const DialogContent = ({
  className,
  children,
  showCloseButton = true,
  ...props
}: DialogContentProps) => {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <Content
        data-slot="dialog-content"
        className={cn(
          'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg',
          className,
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <Close
            data-slot="dialog-close"
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          >
            <Icon id="x" />
            <span className="sr-only">Close</span>
          </Close>
        )}
      </Content>
    </DialogPortal>
  );
};

DialogContent.displayName = 'DialogContent';

export type DialogHeaderProps = ComponentProps<'div'>;

export const DialogHeader = ({ className, ...props }: DialogHeaderProps) => {
  return (
    <div
      data-slot="dialog-header"
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      {...props}
    />
  );
};

DialogHeader.displayName = 'DialogHeader';

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

export type DialogTitleProps = ComponentProps<typeof Title>;

export const DialogTitle = ({ className, ...props }: DialogTitleProps) => {
  return (
    <Title
      data-slot="dialog-title"
      className={cn('text-lg leading-none font-semibold', className)}
      {...props}
    />
  );
};

DialogTitle.displayName = 'DialogTitle';

export type DialogDescriptionProps = ComponentProps<typeof Description>;

export const DialogDescription = ({
  className,
  ...props
}: DialogDescriptionProps) => {
  return (
    <Description
      data-slot="dialog-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  );
};

DialogDescription.displayName = 'DialogDescription';
