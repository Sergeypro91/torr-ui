import { type SVGProps } from 'react';
import { type IconNames, iconNames } from '@torr-app/icons';
import sprite from '@torr-app/icons/sprite.svg?no-inline';

export type IconProps = SVGProps<SVGSVGElement> & {
  id: IconNames;
  size?: number;
};

export { type IconNames, iconNames };

export const Icon = ({ id, size = 24, ...props }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill="currentColor"
      data-testid="icon"
      {...props}
    >
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};

Icon.displayName = 'Icon';
