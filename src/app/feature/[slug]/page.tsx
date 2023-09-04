import React from 'react';
import Layout from '@/app/components/layout';
import Featuredetailpage from '@/app/components/pagecomponent/features/featuresDetailPage';
import { getFeaturesWithSlug } from '@/app/lib/contentful-features';

async function getContent({ slug }: { slug: string }) {
  const details = await getFeaturesWithSlug({
    slug: slug,
    preview: false
  });
  return { details };
}

export default async function FeatureDetail({ params }: { params: { slug: string } }) {
  const { details } = await getContent({ slug: params?.slug });
  return (
    <Layout>
      <Featuredetailpage details={details} />
    </Layout>
  );
}
