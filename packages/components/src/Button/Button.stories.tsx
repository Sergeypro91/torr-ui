import { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { HomeOutlineMd } from '@torr-app/icons';
import { fn } from '@storybook/test';

import { Button, ButtonProps } from './Button';

type StoryProps = ComponentProps<typeof Button>;

const ICONS = { undefined, HomeOutlineMd };

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: { type: 'text' } },
    color: {
      control: { type: 'select' },
      options: [undefined, 'primary', 'success', 'warning', 'error'],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['text', 'outline', 'ghost', 'contained'],
    },
    iconStart: {
      control: 'select',
      options: Object.keys(ICONS),
    },
    iconEnd: {
      control: 'select',
      options: Object.keys(ICONS),
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    borderRadius: {
      control: { type: 'number' },
    },
    asChild: {
      control: { type: 'boolean' },
    },
  },
  args: {
    label: 'Button',
    size: 'md',
    color: undefined,
    variant: 'contained',
    iconStart: undefined,
    iconEnd: undefined,
    disabled: false,
    loading: false,
    fullWidth: false,
    borderRadius: undefined,
    onClick: fn(),
    asChild: false,
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

const ButtonTemplate = (args: ButtonProps) => {
  const iconStart = ICONS[args.iconStart as unknown as keyof typeof ICONS];
  const iconEnd = ICONS[args.iconEnd as unknown as keyof typeof ICONS];

  return <Button {...args} iconStart={iconStart} iconEnd={iconEnd} />;
};

export const Template: Story = {
  name: 'Template',
  render: (args) => <ButtonTemplate {...args} />,
};

export const FullWidth = () => (
  <div style={{ width: '300px' }}>
    <Button label="Button" variant="ghost" fullWidth />
  </div>
);

export const WithIcon = () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <Button label="Button" variant="ghost" iconStart={HomeOutlineMd} />
    <Button label="Button" variant="ghost" iconEnd={HomeOutlineMd} />
    <Button variant="ghost" iconEnd={HomeOutlineMd} />
  </div>
);

export const Sizes = () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <Button size="sm" label="Button" variant="ghost" />
    <Button size="md" label="Button" variant="ghost" />
    <Button size="lg" label="Button" variant="ghost" />
  </div>
);

export const DisabledAndLoading = () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <Button label="Button" variant="text" disabled />
    <Button label="Button" variant="text" loading />
  </div>
);

export const ColorsVariant = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div style={{ display: 'flex', gap: '16px' }}>
      <Button label="Button" color="primary" variant="text" />
      <Button label="Button" color="error" variant="text" />
      <Button label="Button" color="warning" variant="text" />
      <Button label="Button" color="success" variant="text" />
    </div>
    <div style={{ display: 'flex', gap: '16px' }}>
      <Button label="Button" color="primary" variant="outline" />
      <Button label="Button" color="error" variant="outline" />
      <Button label="Button" color="warning" variant="outline" />
      <Button label="Button" color="success" variant="outline" />
    </div>
    <div style={{ display: 'flex', gap: '16px' }}>
      <Button label="Button" color="primary" variant="ghost" />
      <Button label="Button" color="error" variant="ghost" />
      <Button label="Button" color="warning" variant="ghost" />
      <Button label="Button" color="success" variant="ghost" />
    </div>
    <div style={{ display: 'flex', gap: '16px' }}>
      <Button label="Button" color="primary" />
      <Button label="Button" color="error" />
      <Button label="Button" color="warning" />
      <Button label="Button" color="success" />
    </div>
  </div>
);
