import { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip, TooltipProps } from './Tooltip';

type StoryProps = ComponentProps<typeof Tooltip>;

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: { type: 'text' } },
    placement: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
  args: {
    label: 'Test',
    placement: 'top',
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

const TooltipTemplate = (args: TooltipProps) => {
  return <Tooltip {...args} />;
};

export const Template: Story = {
  name: 'Template',
  render: (args) => (
    <TooltipTemplate {...args}>
      <div>Some text</div>
    </TooltipTemplate>
  ),
};
