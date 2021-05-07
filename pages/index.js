import Head from 'next/head';

import BaseLayout from 'components/BaseLayout';
import MetaTags from 'components/MetaTags';
import LeftTextSlider from 'components/Parts/Sliders/LeftText';
import GridService from 'components/Parts/Services/Grid';
import SliderTestimontial from 'components/Parts/Testimontials/Slider';
import LeftTextAbout from 'components/Parts/About/LeftText';
import SimpleCompanies from 'components/Parts/Companies/Simple';
import HorizontalCounters from 'components/Parts/Counters/Horizontal';
import NewestArticles from 'components/Parts/Articles/Newest';

import useSWR from 'swr';
import jsonFetcher from 'utils/jsonFetcher';

import { getAllMainData } from 'utils/api';

export async function getStaticProps() {
  const { edges } = await getAllMainData();

  return {
    props: {
      edges
    },
    revalidate: 3600
  };
};

export default function Home({ edges }) {

  const { data } = useSWR('/api/main', jsonFetcher, { initialData: edges });

  return (
    <div>
      <MetaTags title="Home page" />

      <main>
        <BaseLayout>
          <LeftTextSlider />
          <LeftTextAbout />
          <HorizontalCounters />
          <GridService />
          <SimpleCompanies />
          <SliderTestimontial />
          <NewestArticles articles={data} />
        </BaseLayout>
      </main>
    </div>

  );
}
