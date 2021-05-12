import { useState, useEffect } from 'react';
import useSWR from 'swr';
import dynamic from 'next/dynamic'
import jsonFetcher from 'utils/jsonFetcher';
import BaseLayout from 'components/BaseLayout';
import MetaTags from 'components/MetaTags';
import { getPaginatePost } from 'utils/api';

const ItemList = dynamic(() => import('components/Parts/Articles/ItemList'), { ssr: false });
import SimpleHeader from 'components/Parts/Breadcrumbs/Simple';

export async function getStaticProps() {
  const apiData = await getPaginatePost();

  return {
    props: {
      apiData
    },
    revalidate: 3600
  };
};

export default function Blog({ apiData }) {

  const [posts, setPosts] = useState(apiData.edges);
  const [info, setInfo] = useState(apiData.pageInfo);
  const [loading, setLoading] = useState(false);

  const { data } = useSWR('/api/posts', jsonFetcher, { initialData: apiData });

  useEffect(() => {
    setPosts(data.edges);
    setInfo(data.pageInfo);
  }, [data])

  const loadMoreHandler = async (endCursor) => {
    setLoading(true);
    const apiData = await fetch(`/api/posts/${endCursor}`);
    const apiJson = await apiData.json();
    setPosts([...posts, ...apiJson.edges]);
    setInfo(apiJson.pageInfo);
    setLoading(false);
  }

  return (
    <div>
      <MetaTags title="List of articles" />
      <main>
        <BaseLayout>
          <SimpleHeader h2Text="List of articles" spanText="Read my articles about IT industry" />
          <section className="container mx-auto">
            {posts.map(({ node }) => (
              <ItemList key={node.id} article={node} />
            ))}

            {info.hasNextPage && <div className="flex justify-center mt-12 mb-12">
              <button disabled={loading} onClick={() => loadMoreHandler(info.endCursor)} className="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-blue-600 hover:bg-blue-700 text-gray-50 font-bold leading-loose transition duration-200">
                {loading ? 'Please wait...' : 'Load more'}
              </button>
            </div>}
            
          </section>
        </BaseLayout>
      </main>
    </div>
  );
};