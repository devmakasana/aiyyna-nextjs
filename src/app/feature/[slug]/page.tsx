import React from 'react';
import Layout from '@/app/components/layout';
import Featuredetailpage from '@/app/components/pagecomponent/features/featuresDetailPage';
import { getFeaturesWithSlug } from '@/app/lib/contentful-features';
import { getSEOData } from '@/app/helper/helper';

async function getContent({ slug }: { slug: string }) {
  const details = await getFeaturesWithSlug({
    slug: slug,
    preview: false
  });
  return { details };
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { details } = await getContent({ slug: params?.slug });
  const seoData = await getSEOData({
    data: details?.seoMeta
  });
  return seoData;
}

export default async function FeatureDetail({ params }: { params: { slug: string } }) {
  const { details } = await getContent({ slug: params?.slug });
  return (
    <Layout>
      <Featuredetailpage details={details} />
    </Layout>
  );
}
