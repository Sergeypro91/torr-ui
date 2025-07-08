import { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label } from '../Label';
import { ThemeProvider } from '../Theme';

import { RadioGroup, RadioGroupItem } from './RadioGroup';

type StoryProps = ComponentProps<typeof RadioGroup>;

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'primitive'],
  argTypes: {},
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const RadioGroupDefault: Story = {
  render: () => (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center gap-3">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </RadioGroup>
    </ThemeProvider>
  ),
};
