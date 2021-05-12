import Image from 'next/image';
import { formatDate } from 'utils/date';
import Link from 'next/link';

export default function Single({ service }) {
    return (
        <div className="mb-8 w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="bg-white rounded">
                <Image src={service.featuredImage?.node?.mediaItemUrl} alt={service.featuredImage?.node?.altText} width={350} height={350} />
                <div className="p-6">
                    <span className="text-gray-400">{formatDate(service.date)}</span>
                    <h3 className="mb-4 text-2xl font-bold font-heading">{service.title}</h3>
                    <Link href={`/uslugi/${service.slug}`}>
                        <a className="flex text-blue-600 hover:text-blue-700 font-bold" >
                            View Case Study
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}