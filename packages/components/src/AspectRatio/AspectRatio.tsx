import { ComponentProps } from 'react';
import { cn } from '@torr-app/utils/src';

export type AspectRatioProps = ComponentProps<'img'> & {
  ratio: number;
};

export const AspectRatio = ({
  loading = 'lazy',
  alt = 'image',
  ratio,
  className,
  ...restProps
}: AspectRatioProps) => {
  const aspect = `aspect-[${ratio}]`;

  return (
    <img
      {...restProps}
      loading={loading}
      alt={alt}
      className={cn(`${aspect}`, 'object-cover', className)}
    />
  );
};

AspectRatio.displayName = 'AspectRatio';
