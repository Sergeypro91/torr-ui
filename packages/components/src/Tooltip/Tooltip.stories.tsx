import { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

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
    label: {
      type: 'string',
      description: 'Label',
    },
    children: {
      control: { type: 'object' },
    },
  },
  args: {
    label: 'Hover',
    children: 'Tooltip',
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

const TooltipTemplate = ({ label, children }: TooltipProps) => {
  return <Tooltip label={label}>{children}</Tooltip>;
};

export const Template: Story = {
  name: 'Template',
  render: TooltipTemplate,
};

export const BaseOnNode: Story = {
  name: 'BaseOnNode',
  render: () => {
    const Label = () => <p>Tooltip in paragraph</p>;

    return (
      <Tooltip label={<Label />}>
        <p>Paragraph element</p>
      </Tooltip>
    );
  },
};
