import Layout from '@/app/components/layout';
import BlogdetailPage from '@/app/components/pagecomponent/blog/blogDetailPage';
import { getSEOData } from '@/app/helper/helper';
import { getBlogDetails } from '@/app/lib/contentful-blog';

async function getContent({ params }: { params: { slug: string } }) {
  const blogDetails = await getBlogDetails({ slug: params?.slug, preview: false });
  return { blogDetails };
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { blogDetails } = await getContent({ params });
  const seoData = await getSEOData({
    data: blogDetails?.seoMetadataCollection?.items[0]
  });
  return seoData;
}

export default async function BlogDetail({ params }: { params: { slug: string } }) {
  const { blogDetails } = await getContent({ params });
  return (
    <Layout>
      <BlogdetailPage blogDetails={blogDetails} />
    </Layout>
  );
}
