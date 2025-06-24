import { themes } from 'storybook/theming';
import type { Preview } from '@storybook/react-vite';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
    a11y: {
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
