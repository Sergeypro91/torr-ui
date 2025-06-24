import { ComponentProps } from 'react';
import { Root } from '@radix-ui/react-label';
import { cn } from '@torr-app/utils';

export type LabelProps = ComponentProps<typeof Root>;

export const Label = ({ className, ...props }: LabelProps) => {
  return (
    <Root
      data-slot="label"
      className={cn(
        'flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
};

Label.displayName = 'Label';
