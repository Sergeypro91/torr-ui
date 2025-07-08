import { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Icon } from '../Icon';
import { ThemeProvider } from '../Theme';

import { Alert, AlertDescription, AlertTitle } from './Alert';

type StoryProps = ComponentProps<typeof Alert>;

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const AlertDefault: Story = {
  render: () => {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="grid w-full max-w-xl items-start gap-4">
          <Alert>
            <Icon id="alert-octagon" />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
          </Alert>
          <Alert>
            <Icon id="alert-triangle" />
            <AlertTitle>
              This Alert has a title and an icon. No description.
            </AlertTitle>
          </Alert>
          <Alert variant="destructive">
            <Icon id="alert-circle" />
            <AlertTitle>Unable to process your payment.</AlertTitle>
            <AlertDescription>
              <p>Please verify your billing information and try again.</p>
              <ul className="list-inside list-disc text-sm">
                <li>Check your card details</li>
                <li>Ensure sufficient funds</li>
                <li>Verify billing address</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      </ThemeProvider>
    );
  },
};
