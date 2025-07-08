import { ComponentProps } from 'react';
import { cn } from '@torr-app/utils';

export type CardProps = ComponentProps<'div'>;

export const Card = ({ className, ...props }: CardProps) => {
  return (
    <div
      data-slot="card"
      className={cn(
        'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm',
        className,
      )}
      {...props}
    />
  );
};

Card.displayName = 'Card';

export type CardHeaderProps = ComponentProps<'div'>;

export const CardHeader = ({ className, ...props }: CardHeaderProps) => {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className,
      )}
      {...props}
    />
  );
};

CardHeader.displayName = 'CardHeader';

export type CardTitleProps = ComponentProps<'div'>;

export const CardTitle = ({ className, ...props }: CardTitleProps) => {
  return (
    <div
      data-slot="card-title"
      className={cn('leading-none font-semibold', className)}
      {...props}
    />
  );
};

CardTitle.displayName = 'CardTitle';

export type CardDescriptionProps = ComponentProps<'div'>;

export const CardDescription = ({
  className,
  ...props
}: CardDescriptionProps) => {
  return (
    <div
      data-slot="card-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  );
};

CardDescription.displayName = 'CardDescription';

export type CardActionProps = ComponentProps<'div'>;

export const CardAction = ({ className, ...props }: CardActionProps) => {
  return (
    <div
      data-slot="card-action"
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        className,
      )}
      {...props}
    />
  );
};

CardAction.displayName = 'CardAction';

export type CardContentProps = ComponentProps<'div'>;

export const CardContent = ({ className, ...props }: CardContentProps) => {
  return (
    <div
      data-slot="card-content"
      className={cn('px-6', className)}
      {...props}
    />
  );
};

CardContent.displayName = 'CardContent';

export type CardFooterProps = ComponentProps<'div'>;

export const CardFooter = ({ className, ...props }: CardFooterProps) => {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
      {...props}
    />
  );
};

CardFooter.displayName = 'CardFooter';
