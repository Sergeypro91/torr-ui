import { type PropsWithChildren, type ReactNode } from 'react';

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from './components';

export type DialogProps = PropsWithChildren & {
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

export const Dialog = (props: DialogProps) => {
  const { trigger, header, title, description, children, actions } = props;

  return (
    <DialogRoot>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          {header ?? (
            <>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </>
          )}
        </DialogHeader>
        {children}
        <DialogFooter>
          <DialogClose asChild>{actions.close}</DialogClose>
          {actions.secondary}
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
};

Dialog.displayName = 'Dialog';

Dialog.DialogRoot = DialogRoot;
Dialog.DialogClose = DialogClose;
Dialog.DialogContent = DialogContent;
Dialog.DialogDescription = DialogDescription;
Dialog.DialogFooter = DialogFooter;
Dialog.DialogHeader = DialogHeader;
Dialog.DialogOverlay = DialogOverlay;
Dialog.DialogPortal = DialogPortal;
Dialog.DialogTitle = DialogTitle;
Dialog.DialogTrigger = DialogTrigger;
