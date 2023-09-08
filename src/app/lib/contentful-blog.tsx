import { fetchGraphQL } from './contentful';

const POST_GRAPHQL_METADATE_CONTENT = ` 
seoMetadataCollection{
  items{
    seoTitle
  }
}
`;

const POST_GRAPHQL_BLOG_CONTENT_DATA = `
  title
  slug
  date
  banner{
    url
  }
  description
  ${POST_GRAPHQL_METADATE_CONTENT}
`;

const POST_GRAPHQL_ALL_BLOG_CONTENT_DATA = `
title
slug
date
description
banner{
  url
}
body{
  json
}
`;

const POST_GRAPHQL_BLOG_DETAIL_DATA = `
title
date
banner{
  url
}
description
body{
  json
}
${POST_GRAPHQL_METADATE_CONTENT}
`;

export async function getBlogData({ id, preview }: { id: string; preview: boolean }) {
  const entries = await fetchGraphQL(
    `query {
            pageBlog(id : "${id}", preview: ${preview ? 'true' : 'false'}){
              featuredBlog{
                ${POST_GRAPHQL_BLOG_CONTENT_DATA}
              }
            }
        }`
  );
  return entries?.data?.pageBlog?.featuredBlog;
}

export async function getAllBlogs({ preview }: { preview: boolean }) {
  const entries = await fetchGraphQL(
    `query {
      blogCollection(preview: ${preview ? 'true' : 'false'}){
        items{
          ${POST_GRAPHQL_ALL_BLOG_CONTENT_DATA}
        }
      }
    }`
  );
  return entries?.data?.blogCollection?.items;
}

export async function getBlogDetails({ slug, preview }: { slug: string; preview: boolean }) {
  const blogDetails = await fetchGraphQL(
    `query {
      blogCollection(where: { slug: "${slug}" }, preview: ${preview ? 'true' : 'false'}, limit: 1) {
                items {
                  ${POST_GRAPHQL_BLOG_DETAIL_DATA}
                }
              }
            }`
  );
  return { ...blogDetails?.data?.blogCollection?.items[0] };
}
