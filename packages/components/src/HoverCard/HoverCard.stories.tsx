import { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Avatar, AvatarFallback, AvatarImage } from '../Avatar';
import { Button } from '../Button';
import { ThemeProvider } from '../Theme';

import { HoverCard, HoverCardContent, HoverCardTrigger } from './HoverCard';

type StoryProps = ComponentProps<typeof HoverCard>;

const meta: Meta<typeof HoverCard> = {
  title: 'Components/HoverCard',
  component: HoverCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'windows'],
  argTypes: {},
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const HoverCardDefault: Story = {
  render: () => {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@nextjs</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">
                  The React Framework – created and maintained by @vercel.
                </p>
                <div className="text-muted-foreground text-xs">
                  Joined December 2021
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </ThemeProvider>
    );
  },
};
