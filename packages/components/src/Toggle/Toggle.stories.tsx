import { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '../Icon';
import { ThemeProvider } from '../Theme';

import { Toggle } from './Toggle';

type StoryProps = ComponentProps<typeof Toggle>;

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'extra-primitive'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: [undefined, 'sm', 'lg'] satisfies StoryProps['size'][],
    },
    variant: {
      control: { type: 'select' },
      options: [undefined, 'outline'] satisfies StoryProps['variant'][],
    },
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const ToggleDefault: Story = {
  render: (args) => {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Toggle aria-label="Toggle italic" {...args}>
          <Icon id="folder-outline" className="h-4 w-4" />
        </Toggle>
      </ThemeProvider>
    );
  },
};
