import Layout from '@/app/components/layout';
import Contactpage from '../components/pagecomponent/contact/contactPage';
import { getContactData } from '../lib/contentful-contact';
import { CONTACT_PAGE_CONTENT_ID } from '../components/constant/constant';
import { getSEOData } from '../helper/helper';

async function getContent() {
  const details = await getContactData({ id: CONTACT_PAGE_CONTENT_ID, preview: false });
  return { details };
}

export async function generateMetadata() {
  const { details } = await getContent();
  const seoData = await getSEOData({
    data: details?.seoMetadata
  });
  return seoData;
}

export default async function ContactUS() {
  const { details } = await getContent();
  return (
    <Layout CTAtitle='Let’s simplify & automate your marketing campaigns' CTAbtntext='Book A Demo' href='/request-demo'>
      <Contactpage details={details}/>
    </Layout>
  );
}
