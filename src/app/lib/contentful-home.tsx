import { fetchGraphQL } from './contentful';

const POST_GRAPHQL_HOME_PAGE_CONTENT_DATA1 = `
title
description
banner{
  url
}
companySectionContentCollection{
  items{
    name
    logo{
      url
    }
  }
}
companySectionTitle
`;

const POST_GRAPHQL_HOME_PAGE_CONTENT_DATA2 = `
intigrationTitle
    testinomialSectionTitle
    testinomialSectionContentCollection{
      items{
        profile{
          url
        }
        content
        userName
        companyName
        designation
      }
    }
    seoMetadata{
      seoTitle
    }
`;

const POST_GRAPHQL_HOME_PAGE_CONTENT_DATA3 = `
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
`;

export async function getHomePageContent({ id, preview }: { id: string; preview: boolean }) {
  const entriesData1 = await fetchGraphQL(
    `query {
        pageHome(id :"${id}",preview: ${preview ? 'true' : 'false'}) {
            ${POST_GRAPHQL_HOME_PAGE_CONTENT_DATA1}
          
        }
      }`
  );
  const entriesData2 = await fetchGraphQL(
    `query{
        pageHome(id: "${id}", preview: ${preview ? 'true' : 'false'}){
            ${POST_GRAPHQL_HOME_PAGE_CONTENT_DATA2}
        }
    }`
  );
  const entriesData3 = await fetchGraphQL(
    `query{
        pageHome(id: "${id}", preview: ${preview ? 'true' : 'false'}){
            ${POST_GRAPHQL_HOME_PAGE_CONTENT_DATA3}
        }
    }`
  );
  return { ...entriesData1?.data?.pageHome, ...entriesData2?.data?.pageHome, ...entriesData3?.data?.pageHome };
}
