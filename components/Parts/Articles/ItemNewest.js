import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from 'utils/date';

export default function ItemNewest({ article }) {
    return (
        <div className="mb-6 w-full lg:w-1/4 px-3">
            <div className="rounded overflow-hidden shadow">
                <div className="lg:h-48 w-80 rounded-t relative">
                    <Image src={article.featuredImage?.node?.mediaItemUrl} alt={article.featuredImage?.node?.altText} layout="fill" objectFit="cover" />
                </div>
                <div className="p-6 rounded-b bg-white">
                    <span className="text-sm text-gray-400">{formatDate(article.date)}</span>
                    <h2 className="my-2 text-2xl font-bold">{article.title}</h2>
                    <Link href={`/blog/${article.slug}`}>
                        <a className="text-blue-600 hover:text-blue-700 font-bold">
                            Learn More
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}