'use client';
import React from 'react';

import { Points } from './styles';
import Agreement from '../agreement';
import Refund from '../refund';

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
