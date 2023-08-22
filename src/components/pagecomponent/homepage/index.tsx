import Header from '@/components/header/header';

import Herosection from '@/components/herosection';
import Features from '@/components/Features';
import Integrations from '@/components/integrations';
import FooterCTA from '@/components/footerCta/footercta';
import Footer from '@/components/footer/footer';
import { Group, Hero } from '@/app/styles/homepage';
import Testimonialsection from '@/components/testimonialSection/testimonialsection';

export default function Homepage() {
  return (
    <Group>
      <Hero>
        <Header />
        <Herosection />
      </Hero>
      <Features />
      <Integrations />
      <Testimonialsection />
      <FooterCTA />
      <Footer />
    </Group>
  );
}
