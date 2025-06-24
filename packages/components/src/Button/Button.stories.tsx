import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { ThemeProvider } from '../Theme';

import { Button } from './Button';

type StoryProps = ComponentProps<typeof Button>;

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: [undefined, 'sm', 'lg', 'icon'] satisfies StoryProps['size'][],
    },
    variant: {
      control: { type: 'select' },
      options: [
        undefined,
        'link',
        'outline',
        'ghost',
        'secondary',
        'destructive',
      ] satisfies StoryProps['variant'][],
    },
    asChild: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  render: (args) => {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Button {...args}>Button</Button>
      </ThemeProvider>
    );
  },
};
