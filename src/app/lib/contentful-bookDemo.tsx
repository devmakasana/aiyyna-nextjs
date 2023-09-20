import { fetchGraphQL } from './contentful';

const POST_GRAPHQL_BOOK_DEMO_CONTENT_DATA = `
title
description
companySectionTitle
compnySectionCollection{
  items{
    logo{
      url
    }
  }
}
featureSectionTitle
featureSectionContentCollection{
  items{
    title
    slug
    description
    banner{
      url
    }
  }
}
seoMetadata{
seoTitle
}
`;

export async function getBookDemoData({ id, preview }: { id: string; preview: boolean }) {
  const bookdemoData = await fetchGraphQL(
    `query {
            pageBookDemo(id: "${id}", preview: ${preview}){
                ${POST_GRAPHQL_BOOK_DEMO_CONTENT_DATA}
            }
        }`
  );
  return bookdemoData?.data?.pageBookDemo;
}
