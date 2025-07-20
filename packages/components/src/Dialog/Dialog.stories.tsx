import { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../Button';
import { Input } from '../Input';
import { Label } from '../Label';
import { ThemeProvider } from '../Theme';

import { Dialog } from './Dialog';

type StoryProps = ComponentProps<typeof Dialog>;

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'windows'],
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const DialogDefault: Story = {
  render: () => {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Dialog
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
        />
      </ThemeProvider>
    );
  },
};

export const DialogSimple: Story = {
  render: () => {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Dialog
          trigger={<Button variant="outline">Open Dialog</Button>}
          title="Edit profile"
          description="Make changes to your profile here. Click save when you&apos;re done."
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
        </Dialog>
      </ThemeProvider>
    );
  },
};

export const DialogManual: Story = {
  render: () => {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Dialog.DialogRoot>
          <Dialog.DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </Dialog.DialogTrigger>
          <Dialog.DialogContent className="sm:max-w-[425px]">
            <Dialog.DialogHeader>
              <Dialog.DialogTitle>Edit profile</Dialog.DialogTitle>
              <Dialog.DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </Dialog.DialogDescription>
            </Dialog.DialogHeader>
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
            <Dialog.DialogFooter>
              <Dialog.DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.DialogClose>
              <Button type="submit">Save changes</Button>
            </Dialog.DialogFooter>
          </Dialog.DialogContent>
        </Dialog.DialogRoot>
      </ThemeProvider>
    );
  },
};
