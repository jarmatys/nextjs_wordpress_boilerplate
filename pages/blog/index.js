import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';
import jsonFetcher from 'utils/jsonFetcher';
import { getAllPosts } from 'utils/api';

export async function getStaticProps() {
  const allPosts = await getAllPosts();

  return {
    props: {
      allPosts
    }
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
        <h1>Latest blog articles</h1>
        <hr />
        <section>
          {data.map(({ node }) => (
            <div key={node.id}>
              <div className="padding">
                <h2>{node.title}</h2>
                <Link href={`/blog/${node.slug}`}>
                  <a>Read more</a>
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

