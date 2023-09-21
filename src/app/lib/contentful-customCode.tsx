import { fetchGraphQL } from './contentful';

export async function getCustomeCode() {
  const entries = await fetchGraphQL(
    `query{
        customCodeCollection{
            items{
                name
                code
            }
          }
    }`
  );
  return entries?.data?.customCodeCollection?.items;
}
