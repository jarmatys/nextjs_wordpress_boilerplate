import { useRouter } from 'next/router';
import BaseLayout from 'components/BaseLayout';
import MetaTags from 'components/MetaTags';

import { getAllServiceWithSlug, getService } from 'utils/api';

export async function getStaticPaths() {
    const allService = await getAllServiceWithSlug();

    return {
        paths: allService.edges.map(({ node }) => `/uslugi/${node.slug}/`) || [],
        fallback: true
    }
};

export async function getStaticProps({ params }) {
    const data = await getService(params.slug);

    return {
        revalidate: 30,
        props: {
            serviceData: data.service
        }
    };
};

export default function ServicePage({ serviceData }) {
    const router = useRouter();

    if (!router.isFallback && !serviceData?.slug) {
        return <p>Hmm .. error</p>;
    }

    if (router.isFallback) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <MetaTags title={serviceData.title} />

            <main>
                <BaseLayout>
                    <section className="container mx-auto py-20">
                        <h1 className="mb-12 text-4xl lg:text-5xl font-bold font-heading">{serviceData.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: serviceData.content }}></div>
                    </section>
                </BaseLayout>
            </main>
        </div>
    );
};