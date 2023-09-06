import { fetchGraphQL } from './contentful';

const POST_GRAPHQL_BLOG_CONTENT_DATA = `
  title
  slug
  date
  banner{
    url
  }
  description
  seoMetadataCollection{
    items{
      seoTitle
    }
  }

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

export async function getBlogData({ id, preview }: { id: string; preview: boolean }) {
  const entries = await fetchGraphQL(
    `query {
            pageBlog(id : "${id}", preview: ${preview ? "true" : "false"}){
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
      blogCollection(preview: ${preview ? "true" : "false"}){
        items{
          ${POST_GRAPHQL_ALL_BLOG_CONTENT_DATA}
        }
      }
    }`
  );
  return entries?.data?.blogCollection?.items;
}
