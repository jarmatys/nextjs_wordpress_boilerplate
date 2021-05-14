import Link from 'next/link';

import SingleService from 'components/Parts/Services/Single';
import { countServices } from 'utils/views/services';

export default function Grid({ services, id }) {

    const renderServices = (services) => {
        if (countServices(services) >= 6) {
            return services.map(({ node }) => (
                <SingleService key={node.id} service={node} />
            ));
        }
    };

    if (countServices(services) >= 6) {
        return (
            <section id={id}>
                <div className="py-20 bg-gray-100 radius-for-skewed">
                    <div className="container mx-auto px-4">
                        <div className="mb-16 flex flex-wrap justify-center md:justify-between items-center">
                            <div className="text-center lg:text-left">
                                <span className="text-blue-600 font-bold">Dolor sit amet consectutar</span>
                                <h2 className="text-4xl lg:text-5xl font-bold font-heading">My services</h2>
                            </div>
                            <Link href={`/uslugi/`}>
                                <a className="hidden md:inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-blue-600 hover:bg-blue-700 text-gray-50 font-bold leading-loose transition duration-200">
                                    View More Services
                            </a>
                            </Link>
                        </div>
                        <div className="flex flex-wrap -mx-4 mb-4">
                            {renderServices(services)}
                        </div>
                        <div className="text-center">
                            <Link href={`/uslugi/`}>
                                <a className="md:hidden inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-blue-600 hover:bg-blue-700 text-gray-50 font-bold leading-loose transition duration-200">
                                    View More Services
                            </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    } else {
        return (null);
    }
}
