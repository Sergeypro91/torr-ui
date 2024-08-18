import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'Torr UI Kit',
    brandUrl: 'https://github.com/Sergeypro91/torr-pwa-vite',
    brandImage: '/torr-icon.svg',
    brandTarget: '_self',
  }),
});
