import { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from '../Label';
import { ThemeProvider } from '../Theme';

import { Input } from './Input';

type StoryProps = ComponentProps<typeof Input>;

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'primitive'],
  argTypes: {
    id: {
      type: 'string',
    },
    type: {
      control: { type: 'select' },
      options: [
        'text',
        'file',
        'number',
        'button',
        'color',
        'date',
        'email',
      ] satisfies StoryProps['type'][],
    },
    placeholder: {
      type: 'string',
    },
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const InputDefault: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text here',
  },
  render: (args) => (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Input {...args} />
    </ThemeProvider>
  ),
};

export const File: Story = {
  args: {
    id: 'picture',
    type: 'file',
  },
  render: (args) => (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor={args.id}>Picture</Label>
        <Input {...args} />
      </div>
    </ThemeProvider>
  ),
};

export const Disabled: Story = {
  args: { type: 'email', placeholder: 'Email', disabled: true },
  render: (args) => (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Input {...args} />
    </ThemeProvider>
  ),
};
