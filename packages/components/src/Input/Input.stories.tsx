import { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

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
  tags: ['autodocs'],
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

export const Default: Story = {
  render: (args) => {
    const {
      id = 'default',
      type = 'text',
      placeholder = 'Enter text here',
    } = args;

    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Input {...args} id={id} type={type} placeholder={placeholder} />
      </ThemeProvider>
    );
  },
};

export const File: Story = {
  render: (args) => {
    const { id = 'picture', type = 'file' } = args;

    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor={id}>Picture</Label>
          <Input {...args} id={id} type={type} />
        </div>
      </ThemeProvider>
    );
  },
};

export const Disabled: Story = {
  render: (args) => {
    const { type = 'email', placeholder = 'Email' } = args;

    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Input {...args} disabled type={type} placeholder={placeholder} />
      </ThemeProvider>
    );
  },
};
