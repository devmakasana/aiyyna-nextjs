import React from 'react';
import Header from '../../header/header';
import Venderportal from '../../venderportal/venderPortal';
import Inventory from '../../Inventory/inventory';
import Refund from '../../refund/refund';
import Featurehero from '../../featurehero/featurehero';
import { isEmpty } from '@/app/helper/helper';
import { FeaturesPageModel, ServiceSectionContentCollectionItemsModel } from '@/app/model/featuresModel';

export default function Featuredetailpage({ details }: { details: FeaturesPageModel }) {
  return (
    <div className='group'>
      <div className='hero'>
        <Header />
        {!isEmpty(details?.title) && !isEmpty(details?.description) && (
          <Featurehero title={details?.title} description={details?.description} />
        )}
      </div>
      {!isEmpty(details?.serviceSectionContentCollection?.items) &&
        details?.serviceSectionContentCollection?.items?.map(
          (item: ServiceSectionContentCollectionItemsModel, index: number) => {
            if (index % 2 === 0) {
              return <Venderportal itemDetails={item} />;
            } else {
              return <Inventory itemDetails={item} />;
            }
          }
        )}
      {!isEmpty(details?.body?.json) && <Refund refundPolicyData={details?.body?.json} />}
    </div>
  );
}
