import Herosection from '@/app/components/herosection/herosection';
import Features from '@/app/components/Features/features';
import Integrations from '@/app/components/integrations/integrations';
import Testimonialsection from '@/app/components/testimonialSection/testimonialsection';
import Header from '../../header/header';
import { isEmpty } from '@/app/helper/helper';
import { FeatureSectionContentCollectionItemsModel, HomePageDetail } from '@/app/model/homePageModel';

export default function Homepage({ details, featuresData }: { details: HomePageDetail; featuresData: FeatureSectionContentCollectionItemsModel[] }) {
  return (
    <div className='group'>
      <div className='homehero'>
        <Header />
        <Herosection details={details} />
      </div>
      {!isEmpty(featuresData) && !isEmpty(details?.featureSectionTitle) && (
        <Features featuresData={featuresData} featuresTitle={details?.featureSectionTitle} />
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
