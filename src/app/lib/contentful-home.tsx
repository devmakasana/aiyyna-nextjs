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
featureSectionTitle
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
  return { ...entriesData1?.data?.pageHome, ...entriesData2?.data?.pageHome };
}
