import React, { type FunctionComponent, type ReactNode } from 'react';
import { SvgIcon, type SvgIconProps } from '@mui/material';
import { type Meta } from '@storybook/react';

// Автогенерация
import * as themedIcons from './generated-themed-icons';
import * as customIcons from './generated-custom-icons';

type GeneratedIcons = Record<string, FunctionComponent>;

const getIcons = (
  name: string,
  size: number,
  type: 'themed' | 'custom' | 'all' = 'all',
) => {
  const icons: GeneratedIcons = (() => {
    if (type === 'themed') {
      return themedIcons;
    }

    if (type === 'custom') {
      return customIcons;
    }

    return { ...themedIcons, ...customIcons };
  })();

  return Object.keys(icons)
    .filter((iconName) => iconName.includes(name))
    .map((iconName) => {
      return {
        size,
        name: iconName,
        Component: icons[iconName] as React.FC<SvgIconProps>,
      };
    });
};

const [
  fillMdIcons,
  fillSmIcons,
  outlineMdIcons,
  outlineSmIcons,
  сompaniesLogos,
] = [
  getIcons('FillMd', 24),
  getIcons('FillSm', 16),
  getIcons('OutlineMd', 24),
  getIcons('OutlineSm', 16),
  getIcons('FillMd', 24).filter(
    (icon) =>
      icon.name === 'YoutubeFillMd' ||
      icon.name === 'FacebookFillMd' ||
      icon.name === 'GoogleFillMd' ||
      icon.name === 'VkFillMd' ||
      icon.name === 'TwitterFillMd',
  ),
];

const meta: Meta<typeof SvgIcon> = {
  title: 'Icons/Icons',
  component: SvgIcon,
};

export default meta;

const Icon = ({
  component: Component,
  name,
  size,
  ...props
}: SvgIconProps & {
  component: React.FC<SvgIconProps>;
  size: number;
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100px',
      justifySelf: 'center',
    }}
  >
    <Component {...props} style={{ width: size, height: size }} />
    <p
      style={{
        width: '100%',
        display: 'block',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}
    >
      {name}
    </p>
  </div>
);

const IconGallery = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      maxWidth: '912px',
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px',
      margin: 'auto',
    }}
  >
    {children}
  </div>
);

export const FillMdIcons = (props: SvgIconProps) => (
  <IconGallery>
    {fillMdIcons.map(({ name, size, Component }) => (
      <Icon
        {...props}
        color="primary"
        key={name}
        size={size}
        name={name}
        component={Component}
      />
    ))}
  </IconGallery>
);

export const FillSmIcons = (props: SvgIconProps) => (
  <IconGallery>
    {fillSmIcons.map(({ name, size, Component }) => (
      <Icon
        {...props}
        color="primary"
        key={name}
        size={size}
        name={name}
        component={Component}
      />
    ))}
  </IconGallery>
);

export const OutlineMdIcons = (props: SvgIconProps) => (
  <IconGallery>
    {outlineMdIcons.map(({ name, size, Component }) => (
      <Icon
        {...props}
        color="primary"
        key={name}
        size={size}
        name={name}
        component={Component}
      />
    ))}
  </IconGallery>
);

export const OutlineSmIcons = (props: SvgIconProps) => (
  <IconGallery>
    {outlineSmIcons.map(({ name, size, Component }) => (
      <Icon
        {...props}
        color="primary"
        key={name}
        size={size}
        name={name}
        component={Component}
      />
    ))}
  </IconGallery>
);

export const Logos = (props: SvgIconProps) => (
  <IconGallery>
    {сompaniesLogos.map(({ name, size, Component }) => (
      <Icon
        {...props}
        color="primary"
        key={name}
        size={size}
        name={name}
        component={Component}
      />
    ))}
  </IconGallery>
);
