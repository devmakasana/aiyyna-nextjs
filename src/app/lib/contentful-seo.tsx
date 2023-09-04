import { fetchGraphQL } from "./contentful";

export const POST_GRAPHQL_SEOMETA_FIELDS = `
metaTitle
        metaDescription
        noIndex
        openGraphImage
        {
          url
        }`
function extractData(fetchResponse: { data: any }) {
  return fetchResponse?.data?.seoMeta;
}

export async function getSEOdata(id: string) {
  const entries = await fetchGraphQL(
    `query{
      seoMeta(id:"${id}"){
        ${POST_GRAPHQL_SEOMETA_FIELDS}
      }
    }
    `
  );
  return extractData(entries);
}
