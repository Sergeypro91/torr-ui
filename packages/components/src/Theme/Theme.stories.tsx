import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { ThemeProvider } from './ThemeProvider';
import { ThemeToggle } from './ThemeToggle';

type StoryProps = ComponentProps<typeof ThemeProvider>;

const meta = {
  title: 'Theme/ThemeToggle',
  component: ThemeProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'theming'],
  argTypes: {
    defaultTheme: {
      control: { type: 'radio' },
      options: [
        'system',
        'light',
        'dark',
      ] satisfies StoryProps['defaultTheme'][],
    },
    storageKey: {
      control: { type: 'text' },
      options: ['vite-ui-theme'],
    },
  },
  args: {
    defaultTheme: 'dark',
    storageKey: 'vite-ui-theme',
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const ToggleDefault: Story = {
  render: (args) => (
    <ThemeProvider {...args}>
      <ThemeToggle />
    </ThemeProvider>
  ),
};
