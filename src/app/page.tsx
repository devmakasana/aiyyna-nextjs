import Homepage from '@/app/components/pagecomponent/home/homePage';
import Layout from './components/layout';
import { HOME_PAGE_CONTENT_ID } from './components/constant/constant';
import { getAllFeaturesData, getHomePageContent } from './lib/contentful-home';
import { getSEOData } from './helper/helper';

async function getContent() {
  const details = await getHomePageContent({ id: HOME_PAGE_CONTENT_ID, preview: false });
  const featuresData = await getAllFeaturesData()
  return { details, featuresData };
}

export async function generateMetadata() {
  const { details } = await getContent();
  const seoData = await getSEOData({
    data: details?.seoMetadata
  });
  return seoData;
}

export default async function Home() {
  const { details, featuresData } = await getContent();
  return (
    <Layout>
      <Homepage details={details} featuresData={featuresData}/>
    </Layout>
  );
}
