import Layout from '@/app/components/layout';
import Requestdemopage from '../components/pagecomponent/requestDemo/requestDemoPage';
import { getBookDemoData } from '../lib/contentful-bookDemo';
import { BOOK_DEMO_CONTENT_ID } from '../components/constant/constant';
import { getSEOData } from '../helper/helper';

async function getContent() {
  const details = await getBookDemoData({ id: BOOK_DEMO_CONTENT_ID, preview: false });
  return { details };
}

export async function generateMetadata() {
  const { details } = await getContent();
  const seoData = await getSEOData({
    data: details?.seoMetadata
  });
  return seoData;
}

export default async function RequestDemo() {
  const { details } = await getContent();
  return (
    <Layout>
      <Requestdemopage details={details}/>
    </Layout>
  );
}
