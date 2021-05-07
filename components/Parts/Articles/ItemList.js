import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from 'utils/date';

export default function ItemList({ article }) {
    return (
        <section>
            <div className="mb-8 flex flex-wrap rounded-lg shadow overflow-hidden">
                <div className="w-full lg:w-1/2 py-6 lg:pt-10 px-6 rounded-r bg-white order-1 lg:order-0">
                    <span className="text-sm text-gray-400">{formatDate(article.date)}</span>
                    <h2 className="my-4 text-2xl font-bold">{article.title}</h2>
                    <p className="mb-4 text-gray-400 leading-loose">
                        <span dangerouslySetInnerHTML={{ __html: article.excerpt }} />
                    </p>
                    <Link href={`/blog/${article.slug}`}>
                        <a className="text-blue-600 hover:text-blue-700 font-bold">Learn More</a>
                    </Link>
                </div>
                <div className="w-full lg:w-1/2 rounded-l order-0 lg:order-1">
                    <div className="object-cover h-full relative">
                        <Image src={article.featuredImage?.node?.mediaItemUrl} alt={article.featuredImage?.node?.altText} layout="fill" objectFit="cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}