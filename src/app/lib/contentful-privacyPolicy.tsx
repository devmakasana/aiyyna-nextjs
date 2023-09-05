import { fetchGraphQL } from './contentful';

const POST_GRAPHQL_PRIVACY_POLICY_CONTENT_DATA = `
name
content 
`;

export async function getPrivacyPolicyData({ id, preview }: { id: string; preview: boolean }) {
  const entries = await fetchGraphQL(
    `query {
    commonContent(id : "${id}", preview: ${preview ? 'true' : 'false'}){
            ${POST_GRAPHQL_PRIVACY_POLICY_CONTENT_DATA}
        }
    }`
  );
  return entries?.data?.commonContent;
}
