import { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { ThemeProvider } from '../Theme';
import { Typo } from '../Typo';

import { Carousel } from './Carousel';
import { usePosterData } from './hooks';

type StoryProps = ComponentProps<typeof Carousel>;

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

const Component = () => {
  const { trendList } = usePosterData();
  const slideList = trendList.map((trend) => trend.poster_path);

  const detailList = trendList.map((trend) => (
    <Typo variant="h1" key={trend.id}>
      {trend.title ?? trend.name}
    </Typo>
  ));

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="size-fit">
        <Carousel
          slideList={slideList}
          detailsList={detailList}
          parallaxScroll
        />
      </div>
    </ThemeProvider>
  );
};

export const CarouselDefault: Story = {
  render: Component,
};
