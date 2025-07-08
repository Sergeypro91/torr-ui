import type { Meta, StoryObj } from '@storybook/react-vite';

import { Icon, type IconNames, type IconProps, iconNames } from '../../Icon';
import { IconSample } from '../IconSample';

import style from './IconGallery.module.css';
import { useLogic } from './useLogic';

type StoryProps = IconProps & {
  search: string;
};

const meta = {
  title: 'Icons/Gallery',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'internal'],
  argTypes: {
    search: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'number', min: 12, max: 38, step: 4 },
    },
  },
  args: {
    search: '',
    size: 24,
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

const IconGalleryTemplate = (args: StoryProps) => {
  const { filterIcon } = useLogic();

  return (
    <section className={style.gallery}>
      {iconNames.filter(filterIcon(args.search)).map((name: IconNames) => (
        <IconSample key={name} name={name}>
          <Icon {...args} id={name} />
        </IconSample>
      ))}
    </section>
  );
};

export const Template: Story = {
  name: 'Template',
  render: IconGalleryTemplate,
};
