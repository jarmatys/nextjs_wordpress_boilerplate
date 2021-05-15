import Link from 'next/link';
import Image from 'next/image';

export default function ItemList({ service }) {
    return (
        <div className="flex flex-wrap -mx-3 mb-8 lg:mb-6 py-3">
            <div className="mb-4 lg:mb-0 w-full lg:w-1/4 px-3 rounded">
                <div className="w-full h-full object-cover relative rounded">
                    <Image src={service.featuredImage?.node?.mediaItemUrl} alt={service.featuredImage?.node?.altText} layout="fill" objectFit="cover" />
                </div>
            </div>
            <div className="w-full lg:w-3/4 px-3">
                <Link href={`/uslugi/${service.slug}`}>
                    <a className="hover:underline">
                        <h2 className="mb-1 text-2xl font-bold font-heading">{service.title}</h2>
                    </a>
                </Link>
                <div className="text-gray-500" dangerouslySetInnerHTML={{ __html: service.excerpt }} />
            </div>
        </div>
    )
}