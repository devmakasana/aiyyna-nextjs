'use client';
import React from 'react';

import { Points, Title } from './styles';
import Agreement from '../agreement/agreement';
import Refund from '../refund/refund';
import { isEmpty } from '@/app/helper/helper';
import { BlogModel } from '@/app/model/blogModels';

export default function Blogdetailsdescription({ blogData, blogDesription }: { blogData: BlogModel, blogDesription: string }) {
  return (
    <div>
      <Points>
        {!isEmpty(blogDesription) && <Agreement blogDesription={blogDesription}/>}
        <Title>Policy Detail</Title>
        {!isEmpty(blogData) && <Refund refundPolicyData={blogData}/>}
      </Points>
    </div>
  );
}
