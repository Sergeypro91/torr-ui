import {
  ButtonHTMLAttributes,
  CSSProperties,
  FC,
  MouseEvent,
  forwardRef,
} from 'react';
import { Slot } from '@radix-ui/themes';
import { cn } from '@torr-app/utils';

import style from './Button.module.css';
import { RenderIcon } from './RenderIcon';
import { LoadingOutlineMd } from '@torr-app/icons';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  borderRadius?: number;
  color?: 'primary' | 'success' | 'warning' | 'error';
  fullWidth?: boolean;
  iconStart?: FC;
  iconEnd?: FC;
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
        {isLoaderOverlap && <LoadingOutlineMd className={style.loader} />}
        <span data-loader-overlap={isLoaderOverlap}>{label}</span>
        <RenderIcon isLoading={loading} Icon={IconEnd} />
      </Comp>
    );
  },
);

Button.displayName = 'Button';
