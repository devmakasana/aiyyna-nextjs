import Layout from '@/app/components/layout';
import Blogpage from '../components/pagecomponent/blog/blogPage';
import { getAllBlogs, getBlogData } from '../lib/contentful-blog';
import { BLOG_PAGE_CONTENT_ID } from '../components/constant/constant';
import { getSEOData } from '../helper/helper';

async function getContent() {
  const details = await getBlogData({ id: BLOG_PAGE_CONTENT_ID, preview: false }) ?? {};
  const allBlogs = await getAllBlogs({ preview: false }) ?? [];
  return { details, allBlogs };
}

export async function generateMetadata(){
  const { details } = await getContent();
  const seoData = await getSEOData({
    data: details?.seoMetadataCollection?.items[0]
  });
  return seoData;
}

export default async function Blog() {
  const { details, allBlogs } = await getContent();
  return (
    <Layout>
      <Blogpage details={details} allBlogs={allBlogs} />
    </Layout>
  );
}
