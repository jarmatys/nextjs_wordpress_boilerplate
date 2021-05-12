import { useRouter } from 'next/router';
import BaseLayout from 'components/BaseLayout';
import MetaTags from 'components/MetaTags';

import { getAllPagesWithSlug, getPage } from 'utils/api';

export async function getStaticPaths() {
    const allPages = await getAllPagesWithSlug();

    return {
        paths: allPages.edges.map(({ node }) => `/${node.slug}/`) || [],
        fallback: true
    }
};

export async function getStaticProps({ params }) {
    const data = await getPage(params.slug);

    return {
        revalidate: 30,
        props: {
            pageData: data.page
        }
    };
};

export default function Page({ pageData }) {
    const router = useRouter();

    if (!router.isFallback && !pageData?.slug) {
        return <p>Hmm .. error</p>;
    }

    if (router.isFallback) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <MetaTags title={pageData.title} />

            <main>
                <BaseLayout>
                    <section className="container mx-auto py-20">
                        <div dangerouslySetInnerHTML={{ __html: pageData.content }}></div>
                    </section>
                </BaseLayout>
            </main>
        </div>
    );
};