import { ComponentProps, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from '../Theme';

import { Calendar } from './Calendar';

type StoryProps = ComponentProps<typeof Calendar>;

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

const CalendarTemplate = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow-sm"
        captionLayout="dropdown"
      />
    </ThemeProvider>
  );
};

export const CalendarDefault: Story = {
  render: CalendarTemplate,
};
