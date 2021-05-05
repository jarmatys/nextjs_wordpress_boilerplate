import Head from 'next/head';
import useSWR from 'swr';
import jsonFetcher from 'utils/jsonFetcher';
import BaseLayout from 'components/BaseLayout';
import { getAllPosts } from 'utils/api';

import ListItem from 'components/Parts/Articles/ListItem';
import BlogHeader from 'components/Parts/Headers/Blog';

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
          <section>
            {data.map(({ node }) => (
              <ListItem key={node.id} article={node} />
            ))}
          </section>
        </BaseLayout>
      </main>
    </div>
  );
};