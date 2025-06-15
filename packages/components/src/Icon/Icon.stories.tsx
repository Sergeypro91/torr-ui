import { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Icon, type IconProps, iconNames } from './Icon';

type StoryProps = ComponentProps<typeof Icon>;

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: { type: 'select' },
      options: iconNames,
    },
    size: {
      control: { type: 'number', min: 12, max: 38, step: 4 },
    },
  },
  args: {
    id: 'home-outline',
    size: 24,
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

const IconTemplate = (args: IconProps) => <Icon {...args} />;

export const Template: Story = {
  name: 'Template',
  render: IconTemplate,
};
