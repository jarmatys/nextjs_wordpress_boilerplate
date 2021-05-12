import useSWR from 'swr';
import Link from 'next/link';
import jsonFetcher from 'utils/jsonFetcher';
import BaseLayout from 'components/BaseLayout';
import MetaTags from 'components/MetaTags';
import { getAllServices } from 'utils/api';

import SimpleHeader from 'components/Parts/Breadcrumbs/Simple';

export async function getStaticProps() {
    const apiData = await getAllServices();

    return {
        props: {
            apiData
        },
        revalidate: 3600
    };
};

export default function Services({ apiData }) {

    const { data } = useSWR('/api/services', jsonFetcher, { initialData: apiData });

    return (
        <div>
            <MetaTags title="List of services" />
            <main>
                <BaseLayout>
                    <SimpleHeader h2Text="List of services" spanText="All my services" />
                    <section className="container mx-auto">
                        {data.edges.map(({ node }) => (
                            <div className="py-6" key={node.id}>
                                <p>{node.title}</p>
                                <Link href={`/uslugi/${node.slug}`}>
                                    <a>Link</a>
                                </Link>
                            </div>
                        ))}
                    </section>
                </BaseLayout>
            </main>
        </div>
    );
};