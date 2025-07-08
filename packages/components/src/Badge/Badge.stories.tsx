import { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Icon } from '../Icon';
import { ThemeProvider } from '../Theme';

import { Badge } from './Badge';

type StoryProps = ComponentProps<typeof Badge>;

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'extra-primitive'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        undefined,
        'default',
        'secondary',
        'destructive',
        'outline',
      ] satisfies StoryProps['variant'][],
    },
    asChild: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const BadgeDefault: Story = {
  render: (args) => {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Badge {...args}>Badge</Badge>
      </ThemeProvider>
    );
  },
};

export const BadgeVariants: Story = {
  render: () => {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex flex-col items-center gap-2">
          <div className="flex w-full flex-wrap gap-2">
            <Badge>Badge</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
          <div className="flex w-full flex-wrap gap-2">
            <Badge
              variant="secondary"
              className="bg-blue-500 text-white dark:bg-blue-600"
            >
              <Icon id="check" />
              Verified
            </Badge>
            <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
              8
            </Badge>
            <Badge
              className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
              variant="destructive"
            >
              99
            </Badge>
            <Badge
              className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
              variant="outline"
            >
              20+
            </Badge>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};
