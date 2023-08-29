import Header from '@/app/components/header/header';

import Herosection from '@/app/components/herosection';
import Features from '@/app/components/Features';
import Integrations from '@/app/components/integrations';
import FooterCTA from '@/app/components/footerCta/footercta';
import Footer from '@/app/components/footer/footer';
import { Group, Hero } from '@/app/styles/homepage';
import Testimonialsection from '@/app/components/testimonialSection/testimonialsection';

export default function Homepage() {
  return (
    <Group>
      <Hero>
        {/* <Header /> */}
        <Herosection />
      </Hero>
      <Features />
      <Integrations />
      <Testimonialsection />
      <FooterCTA
        description={'Drop us a line or two, we are open for creative minds and collaborations!'}
        title={'Contact Us'}
      />
      {/* <Footer /> */}
    </Group>
  );
}
