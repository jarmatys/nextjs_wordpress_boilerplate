import Head from 'next/head';
import useSWR from 'swr';
import jsonFetcher from 'utils/jsonFetcher';
import BaseLayout from 'components/BaseLayout';
import { getAllPosts } from 'utils/api';

import ItemList from 'components/Parts/Articles/ItemList';
import BlogHeader from 'components/Parts/Breadcrumbs/Blog';

export async function getStaticProps() {
  const allPosts = await getAllPosts();

  return {
    props: {
      allPosts
    },
    revalidate: 3600
  };
};

export default function Blog({ allPosts: { edges } }) {

  const { data } = useSWR('/api/posts', jsonFetcher, { initialData: edges });

  return (
    <div>
      <Head>
        <title>Blog articles page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <BaseLayout>
          <BlogHeader />
          <section className="container mx-auto">
            {data.map(({ node }) => (
              <ItemList key={node.id} article={node} />
            ))}
          </section>
        </BaseLayout>
      </main>
    </div>
  );
};