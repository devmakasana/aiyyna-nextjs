import React from 'react';
import Layout from '@/app/components/layout';
import Privacypolicy from '../components/pagecomponent/privacypolicy/privacyPolicyPage';
import { getPrivacyPolicyData } from '../lib/contentful-privacyPolicy';
import { PRIVACY_POLICY_PAGE_CONTENT_ID } from '../components/constant/constant';

async function getContent() {
  const details = await getPrivacyPolicyData({ id: PRIVACY_POLICY_PAGE_CONTENT_ID, preview: false });
  return { details };
}

export default async function PrivacyPolicy() {
  const { details } = await getContent();
  return (
    <Layout>
      <Privacypolicy details={details} />
    </Layout>
  );
}
