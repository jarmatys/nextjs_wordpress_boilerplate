const API_URL = "https://klient.armatys.me/ubezpieczeniazrabatem/graphql/";
import { request } from 'graphql-request'

import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';
import { getAllPosts, fetchAPI } from 'utils/api';

export async function getStaticProps() {
  const allPosts = await getAllPosts();

  return {
    props: {
      allPosts
    }
  };
};

const jsonFetcher = (query) => request(API_URL, query);

export default function Blog({ allPosts: { edges } }) {

  const { data } = useSWR(`
  query AllPosts {
    posts(first: 20, where: { orderby: { field: DATE, order: DESC}}) {
      edges {
        node {
          id
          date
          title
          slug
          extraPostInfo {
            authorExcerpt
            thumbnailImage {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
  `, jsonFetcher, { initialData: edges });

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
          {data.posts.edges.map(({ node }) => (
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

