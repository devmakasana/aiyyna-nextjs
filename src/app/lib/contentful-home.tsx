import { fetchGraphQL } from './contentful';

const POST_GRAPHQL_HOME_PAGE_CONTENT_DATA = `
title
description
banner{
  url
}
companySectionTitle
companySectionContentCollection{
  items{
    logo{
      url
    }
  }
}
featureSectionTitle
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
            ${POST_GRAPHQL_HOME_PAGE_CONTENT_DATA}
          
        }
      }`
  );

  return entriesData1?.data?.pageHome;
}
