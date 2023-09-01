import Herosection from '@/app/components/herosection/herosection';
import Features from '@/app/components/Features/features';
import Integrations from '@/app/components/integrations/integrations';
import Testimonialsection from '@/app/components/testimonialSection/testimonialsection';
import Header from '../../header/header';
import { isEmpty } from '@/app/helper/helper';
import { HomePageDetail } from '@/app/model/homePageModel';

export default function Homepage({ details }: { details: HomePageDetail }) {
  return (
    <div className='group'>
      <div className='homehero'>
        <Header />
        <Herosection details={details} />
      </div>
      {!isEmpty(details?.featureSectionContentCollection?.items) && !isEmpty(details?.featureSectionTitle) && (
        <Features
          featuresData={details?.featureSectionContentCollection?.items}
          featuresTitle={details?.featureSectionTitle}
        />
      )}
      {!isEmpty(details?.intigrationTitle) && <Integrations IntegrationTitle={details?.intigrationTitle} />}
      {!isEmpty(details?.testinomialSectionContentCollection?.items) && !isEmpty(details?.testinomialSectionTitle) && (
        <Testimonialsection
          testinomialData={details?.testinomialSectionContentCollection?.items}
          testimonialTitle={details?.testinomialSectionTitle}
        />
      )}
    </div>
  );
}
