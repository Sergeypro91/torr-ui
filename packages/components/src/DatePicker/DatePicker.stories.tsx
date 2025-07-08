import { ComponentProps, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../Button';
import { Calendar } from '../Calendar';
import { Icon } from '../Icon';
import { Label } from '../Label';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover';
import { ThemeProvider } from '../Theme';

import { DatePicker } from './DatePicker';

type StoryProps = ComponentProps<typeof DatePicker>;

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

const DataPickerTemplate = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col gap-3">
        <Label htmlFor="date" className="px-1">
          Date of birth
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date"
              className="w-48 !justify-between font-normal"
            >
              {date ? date.toLocaleDateString() : 'Select date'}
              <Icon id="chevron-down" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              onSelect={(date) => {
                setDate(date);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </ThemeProvider>
  );
};

export const DatePickerDefault: Story = {
  render: DataPickerTemplate,
};
