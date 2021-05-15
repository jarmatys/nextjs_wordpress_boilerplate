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
import { jsonFetcher } from 'utils/general';

import { getAllMainData } from 'utils/api';

export async function getStaticProps() {
  const allMainData = await getAllMainData();
  return {
    props: {
      allMainData
    },
    revalidate: 3600
  };
};

export default function Home({ allMainData }) {

  const { data } = useSWR('/api/main', jsonFetcher, { initialData: allMainData });

  return (
    <div>
      <MetaTags title="Home page" />
      <main>
        <BaseLayout>
          <LeftTextSlider />
          <LeftTextAbout id="about" />
          <HorizontalCounters />
          <GridService id="services" services={data?.services.edges} />
          <SimpleCompanies />
          <SliderTestimontial testimontials={data?.testiomontials.edges} />
          <NewestArticles articles={data?.posts.edges} />
        </BaseLayout>
      </main>
    </div>
  );
}
