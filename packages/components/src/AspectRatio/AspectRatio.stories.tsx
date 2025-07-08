import { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { ThemeProvider } from '../Theme';

import { AspectRatio } from './AspectRatio';

type StoryProps = ComponentProps<typeof AspectRatio>;

const meta: Meta<typeof AspectRatio> = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const AspectRatioDefault: Story = {
  render: () => {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AspectRatio
          width="100%"
          ratio={16 / 9}
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          className="bg-muted rounded-lg"
        />
      </ThemeProvider>
    );
  },
};
