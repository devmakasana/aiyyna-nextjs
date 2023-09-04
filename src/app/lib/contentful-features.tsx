import { fetchGraphQL } from './contentful';

const POST_GRAPHQL_FEATURS_CONTENT_DATA = `
title
slug
description
banner{
  url
}
serviceSectionContentCollection{
  items{
    title
    name
    description
    banner{
      url
    }
  }
}
body{
  json
}
`;

export async function getFeaturesWithSlug({ slug, preview }: { slug: string; preview: boolean }) {
  const entries = await fetchGraphQL(
    `query {
        featureCollection(where: { slug: "${slug}" }, preview: ${preview ? 'true' : 'false'}, limit: 1) {
                  items {
                    ${POST_GRAPHQL_FEATURS_CONTENT_DATA}
                  }
                }
              }`
  );
  return { ...entries?.data?.featureCollection?.items[0] };
}
