import Head from 'next/head';
import Link from 'next/link';

import { getAllPosts } from 'utils/api';

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  return {
    props: {
      allPosts
    }
  };
}

export default function Blog({ allPosts: { edges } }) {
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
          {edges.map(({ node }) => (
            <div key={node.id}>
              <div>
                <figure>
                  <img
                    src={node.extraPostInfo.thumbnailImage.mediaItemUrl}
                    alt={node.title}
                  />
                </figure>
              </div>
              <div>
                <h2>{node.title}</h2>
                <p>{node.extraPostInfo.authorExcerpt}</p>
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

  