import { type ComponentProps } from 'react';
import { Trigger } from '@radix-ui/react-dialog';

export type DialogTriggerProps = ComponentProps<typeof Trigger>;

export const DialogTrigger = ({ ...props }: DialogTriggerProps) => {
  return <Trigger data-slot="dialog-trigger" {...props} />;
};

DialogTrigger.displayName = 'DialogTrigger';
