import { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../Label';
import { ThemeProvider } from '../Theme';

import { Switch } from './Switch';

type StoryProps = ComponentProps<typeof Switch>;

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'primitive'],
  argTypes: {
    id: {
      type: 'string',
    },
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const SwitchDefault: Story = {
  args: {
    id: 'airplane-mode',
  },
  render: (args) => {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex items-center space-x-2">
          <Switch id={args.id} />
          <Label htmlFor={args.id}>Airplane Mode</Label>
        </div>
      </ThemeProvider>
    );
  },
};
