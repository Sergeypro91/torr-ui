import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandUrl: 'https://github.com/Sergeypro91/torr-ui',
    brandTitle: 'Torr UI Kit',
    brandImage:
      'https://raw.githubusercontent.com/Sergeypro91/torr-ui/dd2a94d001c9e835c7ecfffcb0686ed727f5df30/public/torr-icon.svg',
    brandTarget: '_self',
  }),
});
