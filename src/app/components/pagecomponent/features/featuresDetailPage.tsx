import React from 'react';
import Header from '../../header/header';
import Venderportal from '../../venderportal/venderPortal';
import Inventory from '../../Inventory/inventory';
import Refund from '../../refund/refund';
import Featurehero from '../../featurehero/featurehero';

export default function Featuredetailpage() {
  return (
    <div className='group'>
      <div className='hero'>
        <Header />
        <Featurehero />
      </div>
      <Venderportal />
      <Inventory />
      <Refund />
    </div>
  );
}
