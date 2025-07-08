import { type ComponentPropsWithRef } from 'react';

type DotButtonProps = ComponentPropsWithRef<'button'> & {
  index: number;
};

export const DotButton = (props: DotButtonProps) => {
  const { index, children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};

DotButton.displayName = 'DotButton';
