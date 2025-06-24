import { ComponentProps } from 'react';
import { Fallback, Image, Root } from '@radix-ui/react-avatar';
import { cn } from '@torr-app/utils';

export type AvatarProps = ComponentProps<typeof Root>;

export const Avatar = ({ className, ...props }: AvatarProps) => {
  return (
    <Root
      data-slot="avatar"
      className={cn(
        'relative flex size-8 shrink-0 overflow-hidden rounded-full',
        className,
      )}
      {...props}
    />
  );
};

export type AvatarImageProps = ComponentProps<typeof Image>;

export const AvatarImage = ({ className, ...props }: AvatarImageProps) => {
  return (
    <Image
      data-slot="avatar-image"
      className={cn('aspect-square size-full', className)}
      {...props}
    />
  );
};

AvatarImage.displayName = 'AvatarImage';

export type AvatarFallbackProps = ComponentProps<typeof Fallback>;

export const AvatarFallback = ({
  className,
  ...props
}: AvatarFallbackProps) => {
  return (
    <Fallback
      data-slot="avatar-fallback"
      className={cn(
        'bg-muted flex size-full items-center justify-center rounded-full',
        className,
      )}
      {...props}
    />
  );
};

AvatarFallback.displayName = 'AvatarFallback';
