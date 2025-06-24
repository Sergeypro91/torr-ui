import { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Icon, iconNames } from './Icon';

type StoryProps = ComponentProps<typeof Icon>;

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'primitive'],
  argTypes: {
    id: {
      control: { type: 'select' },
      options: iconNames,
    },
    size: {
      control: { type: 'number', min: 12, max: 38, step: 4 },
    },
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const IconDefault: Story = {
  args: {
    id: 'home-outline',
    size: 24,
  },
  render: (args) => <Icon {...args} />,
};
