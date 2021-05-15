import useSWR from 'swr';
import { jsonFetcher } from 'utils/general';
import BaseLayout from 'components/BaseLayout';
import MetaTags from 'components/MetaTags';
import { getAllServices } from 'utils/api';

import SimpleHeader from 'components/Parts/Breadcrumbs/Simple';
import ItemListService from 'components/Parts/Services/ItemList';

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

                    <section>
                        <div className="my-12 radius-for-skewed">
                            <div className="container mx-auto px-4">
                                <div className="flex flex-wrap -mx-3">
                                    <div className="w-full px-3">
                                        {data.edges.map(({ node }) => (
                                            <ItemListService key={node.id} service={node} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </BaseLayout>
            </main>
        </div>
    );
};