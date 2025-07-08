import { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from '../Theme';

import { Typo, typoVariant } from './Typo';

type StoryProps = ComponentProps<typeof Typo>;

const meta: Meta<typeof Typo> = {
  title: 'Components/Typo',
  component: Typo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.entries(typoVariant).map(([key]) => key),
    },
    children: {
      type: 'string',
    },
  },
  args: {
    children: 'Lorem',
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const TypoDefault: Story = {
  render: (args) => {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Typo {...args} />
      </ThemeProvider>
    );
  },
};
