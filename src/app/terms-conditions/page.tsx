import Layout from '@/app/components/layout';
import TermsandConditionsPage from '../components/pagecomponent/termsAndConditions/termsAndConditionsPage';
import { getTermsAndConditionData } from '../lib/contentful-termsAndCondition';
import { TERMS_AND_CONSTION_CONTENT_ID } from '../components/constant/constant';

async function getContent() {
  const details = await getTermsAndConditionData({ id: TERMS_AND_CONSTION_CONTENT_ID, preview: false });
  return { details };
}

export default async function TremsCondition() {
  const { details } = await getContent();
  return (
    <Layout>
      <TermsandConditionsPage details={details} />
    </Layout>
  );
}
