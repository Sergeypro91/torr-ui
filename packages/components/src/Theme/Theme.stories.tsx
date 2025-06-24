import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { ThemeProvider } from './ThemeProvider';
import { ThemeToggle } from './ThemeToggle';

type StoryProps = ComponentProps<typeof ThemeProvider>;

const meta = {
  title: 'Theme/Toggle',
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

const ThemeTemplate = (args: StoryProps) => {
  return (
    <ThemeProvider {...args}>
      <ThemeToggle />
    </ThemeProvider>
  );
};

export const Toggle: Story = {
  name: 'Template',
  render: ThemeTemplate,
};
