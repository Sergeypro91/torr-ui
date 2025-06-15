import {
  ButtonHTMLAttributes,
  CSSProperties,
  forwardRef,
  MouseEvent,
  ReactNode,
} from 'react';
import { Slot } from '@radix-ui/themes';
import { cn } from '@torr-app/utils';

import { Icon } from '../Icon';

import style from './Button.module.css';
import { RenderIcon } from './RenderIcon';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  borderRadius?: number;
  color?: 'primary' | 'success' | 'warning' | 'error';
  fullWidth?: boolean;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  label?: string;
  loading?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'text' | 'outline' | 'ghost' | 'contained';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild = false,
      borderRadius,
      className,
      color,
      disabled = false,
      fullWidth = false,
      iconStart: IconStart,
      iconEnd: IconEnd,
      label,
      loading = false,
      onClick,
      size = 'md',
      variant = 'contained',
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    const isLoaderOverlap = loading && !IconStart && !IconEnd;

    const elementStyle = {
      '--local-border-radius': borderRadius ? `${borderRadius}px` : undefined,
    } as CSSProperties;

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      if (!loading && !disabled) {
        onClick?.(event);
      }
    };

    return (
      <Comp
        ref={ref}
        className={cn(style.button, className)}
        disabled={disabled}
        onClick={handleClick}
        data-size={size}
        data-color={color}
        data-loading={loading}
        data-variant={variant}
        data-icon-only={!label}
        data-full-width={fullWidth}
        style={elementStyle}
        {...props}
      >
        <RenderIcon isLoading={loading} Icon={IconStart} />
        {isLoaderOverlap && (
          <Icon id="dashed-circle" className={style.loader} />
        )}
        <span data-loader-overlap={isLoaderOverlap}>{label}</span>
        <RenderIcon isLoading={loading} Icon={IconEnd} />
      </Comp>
    );
  },
);

Button.displayName = 'Button';
