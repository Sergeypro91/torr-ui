import { type ComponentProps } from 'react';
import { Description } from '@radix-ui/react-dialog';
import { cn } from '@torr-app/utils';

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
