import { ComponentProps, ReactNode } from 'react';
import {
  Arrow,
  Content,
  Portal,
  Provider,
  Root,
  Trigger,
} from '@radix-ui/react-tooltip';
import { cn } from '@torr-app/utils';

type TooltipProviderProps = ComponentProps<typeof Provider>;

const TooltipProvider = ({
  delayDuration = 0,
  ...props
}: TooltipProviderProps) => {
  return (
    <Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
};

TooltipProvider.displayName = 'TooltipProvider';

type TooltipCoreProps = ComponentProps<typeof Root>;

const TooltipCore = ({ ...props }: TooltipCoreProps) => {
  return (
    <TooltipProvider>
      <Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
};

TooltipCore.displayName = 'TooltipCore';

type TooltipTriggerProps = ComponentProps<typeof Trigger>;

const TooltipTrigger = ({ ...props }: TooltipTriggerProps) => {
  return <Trigger data-slot="tooltip-trigger" {...props} />;
};

TooltipTrigger.displayName = 'TooltipTrigger';

type TooltipContentProps = ComponentProps<typeof Content>;

const TooltipContent = ({
  className,
  sideOffset = 0,
  children,
  ...props
}: TooltipContentProps) => {
  return (
    <Portal>
      <Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          'bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance',
          className,
        )}
        {...props}
      >
        {children}
        <Arrow className="bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
      </Content>
    </Portal>
  );
};

TooltipContent.displayName = 'TooltipContent';

export type TooltipProps = {
  label: ReactNode;
  children: ReactNode;
};

export const Tooltip = ({ label, children }: TooltipProps) => {
  return (
    <TooltipCore>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </TooltipCore>
  );
};

Tooltip.displayName = 'Tooltip';
