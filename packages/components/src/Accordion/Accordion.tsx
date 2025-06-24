import { ComponentProps } from 'react';
import {
  Content,
  Header,
  Item,
  Root,
  Trigger,
} from '@radix-ui/react-accordion';
import { cn } from '@torr-app/utils';

import { Icon } from '../Icon';

export type AccordionProps = ComponentProps<typeof Root>;

export const Accordion = ({ ...props }: AccordionProps) => {
  return <Root data-slot="accordion" {...props} />;
};

Accordion.displayName = 'Accordion';
export type AccordionItemProps = ComponentProps<typeof Item>;

export const AccordionItem = ({ className, ...props }: AccordionItemProps) => {
  return (
    <Item
      data-slot="accordion-item"
      className={cn('border-b last:border-b-0', className)}
      {...props}
    />
  );
};

AccordionItem.displayName = 'AccordionItem';
export type AccordionTriggerProps = ComponentProps<typeof Trigger>;

export const AccordionTrigger = ({
  className,
  children,
  ...props
}: AccordionTriggerProps) => {
  return (
    <Header className="flex">
      <Trigger
        data-slot="accordion-trigger"
        className={cn(
          'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
          className,
        )}
        {...props}
      >
        {children}
        <Icon
          id="chevron-down"
          className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
        />
      </Trigger>
    </Header>
  );
};

AccordionTrigger.displayName = 'AccordionTrigger';
export type AccordionContentProps = ComponentProps<typeof Content>;

export const AccordionContent = ({
  className,
  children,
  ...props
}: AccordionContentProps) => {
  return (
    <Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn('pt-0 pb-4', className)}>{children}</div>
    </Content>
  );
};

AccordionContent.displayName = 'AccordionContent';
