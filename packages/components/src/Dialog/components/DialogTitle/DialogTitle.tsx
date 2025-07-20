import { type ComponentProps } from 'react';
import { Title } from '@radix-ui/react-dialog';
import { cn } from '@torr-app/utils';

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
