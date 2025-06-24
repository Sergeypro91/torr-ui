import { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from '../Theme';

import { Label } from './Label';

type StoryProps = ComponentProps<typeof Label>;

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    htmlFor: {
      type: 'string',
    },
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  render: (args) => {
    const { htmlFor = 'default' } = args;

    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Label {...args} htmlFor={htmlFor}>
          Label
        </Label>
      </ThemeProvider>
    );
  },
};
