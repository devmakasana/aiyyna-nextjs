'use client';
import React from 'react';

import { Points } from './styles';
import Agreement from '../agreement/agreement';
import Refund from '../refund/refund';

export default function Blogdetailsdescription() {
  return (
    <div>
      {' '}
      <Points>
        <Agreement />
        <Refund />
      </Points>
    </div>
  );
}
