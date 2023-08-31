import React from 'react';
import Header from '../../header/header';
import Venderportal from '../../venderportal';
import Inventory from '../../Inventory';
import Refund from '../../refund';
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
