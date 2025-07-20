import { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { Input } from '../Input';
import { Label } from '../Label';
import { ThemeProvider } from '../Theme';

import { DialogDrawer } from './DialogDrawer';

type StoryProps = ComponentProps<typeof DialogDrawer>;

const meta: Meta<typeof DialogDrawer> = {
  title: 'Components/DialogDrawer',
  component: DialogDrawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const DialogDrawerDefault: Story = {
  render: () => {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <DialogDrawer
          trigger={<Button variant="outline">Click on Me</Button>}
          title="Title"
          description="Some dialog information"
          actions={{
            secondary: [
              <Button key="submit" type="submit">
                Save changes
              </Button>,
            ],
            close: <Button variant="outline">Cancel</Button>,
          }}
        >
          <form>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Name</Label>
                <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username-1">Username</Label>
                <Input
                  id="username-1"
                  name="username"
                  defaultValue="@peduarte"
                />
              </div>
            </div>
          </form>
        </DialogDrawer>
      </ThemeProvider>
    );
  },
};
