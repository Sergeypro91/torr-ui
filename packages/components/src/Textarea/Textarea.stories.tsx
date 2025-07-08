import { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from '../Label';
import { ThemeProvider } from '../Theme';

import { Textarea } from './Textarea';

type StoryProps = ComponentProps<typeof Textarea>;

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'primitive'],
  argTypes: {
    id: {
      type: 'string',
    },
    placeholder: {
      type: 'string',
    },
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const TextareaDefault: Story = {
  args: {
    id: 'airplane-mode',
    placeholder: 'Some placeholder text',
  },
  render: (args) => {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="grid w-full gap-3">
          <Label htmlFor={args.id}>Your Message</Label>
          <Textarea {...args} />
          <p className="text-muted-foreground text-sm">
            Your message will be copied to the support team.
          </p>
        </div>
      </ThemeProvider>
    );
  },
};
