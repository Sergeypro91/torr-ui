import { ComponentProps } from 'react';
import { Indicator, Item, Root } from '@radix-ui/react-radio-group';
import { cn } from '@torr-app/utils';

import { Icon } from '../Icon';

export type RadioGroupProps = ComponentProps<typeof Root>;

export const RadioGroup = ({ className, ...props }: RadioGroupProps) => {
  return (
    <Root
      data-slot="radio-group"
      className={cn('grid gap-3', className)}
      {...props}
    />
  );
};

RadioGroup.displayName = 'RadioGroup';
export type RadioGroupItemProps = ComponentProps<typeof Item>;

export const RadioGroupItem = ({
  className,
  ...props
}: RadioGroupItemProps) => {
  return (
    <Item
      data-slot="radio-group-item"
      className={cn(
        'border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <Icon
          id="circle-fill"
          className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2"
        />
      </Indicator>
    </Item>
  );
};

RadioGroupItem.displayName = 'RadioGroupItem';
