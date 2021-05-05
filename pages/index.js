import BaseLayout from 'components/BaseLayout';
import LeftTextSlider from 'components/Parts/Sliders/LeftText';
import GridService from 'components/Parts/Services/Grid';
import SliderTestimontial from 'components/Parts/Testimontials/Slider';
import LeftTextAbout from 'components/Parts/About/LeftText';
import SimpleCompanies from 'components/Parts/Companies/Simple';
import HorizontalCounters from 'components/Parts/Counters/Horizontal';
import NewestArticles from 'components/Parts/Articles/Newest';

export default function Home() {
  return (
    <BaseLayout>
      <LeftTextSlider />
      <LeftTextAbout />
      <HorizontalCounters />
      <GridService />
      <SimpleCompanies />
      <SliderTestimontial />
      <NewestArticles />
    </BaseLayout>
  );
}
