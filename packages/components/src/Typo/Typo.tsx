import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentProps, HTMLAttributes } from 'react';
import { cn } from '@torr-app/utils';

export const typoVariant = {
  h1: 'scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance',
  h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
  h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
  h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
  p: 'leading-7 [&:not(:first-child)]:mt-6',
  blockquote: 'mt-6 border-l-2 pl-6 italic',
  code: 'bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
};

export const typoVariants = cva('', {
  variants: {
    variant: typoVariant,
  },
  defaultVariants: {
    variant: 'p',
  },
});

type TypoProps = ComponentProps<'p'> & VariantProps<typeof typoVariants>;

export const Typo = (props: TypoProps) => {
  const { className, children, variant, ...restProps } = props;
  const Component = variant ?? 'p';

  return (
    <Component
      className={cn(typoVariants({ variant, className }))}
      {...(restProps as HTMLAttributes<unknown>)}
    >
      {children}
    </Component>
  );
};

Typo.displayName = 'Typo';
