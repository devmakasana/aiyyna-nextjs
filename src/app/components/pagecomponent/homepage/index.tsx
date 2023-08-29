import Herosection from '@/app/components/herosection';
import Features from '@/app/components/Features';
import Integrations from '@/app/components/integrations';
import Testimonialsection from '@/app/components/testimonialSection/testimonialsection';
import Header from '../../header/header';

export default function Homepage() {
  return (
    <div className='group'>
      <div className='homehero'>
        <Header />
        <Herosection />
      </div>
      <Features />
      <Integrations />
      <Testimonialsection />
    </div>
  );
}
