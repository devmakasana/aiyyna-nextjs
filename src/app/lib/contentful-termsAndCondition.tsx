import { fetchGraphQL } from "./contentful";

const POST_GRAPHQL_TERMS_AND_CONDITION_CONTENT_DATA = `
content 
`;

export async function getTermsAndConditionData({ id, preview }: { id: string; preview: boolean }) {
  const entries = await fetchGraphQL(
    `query {
    commonContent(id : "${id}", preview: ${preview ? 'true' : 'false'}){
            ${POST_GRAPHQL_TERMS_AND_CONDITION_CONTENT_DATA}
        }
    }`
  );
  return entries?.data?.commonContent;
}