import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from 'utils/date';

export default function ({ article }) {
    return (
        <section className="px-20 py-6">
            <div class="mb-8 flex flex-wrap rounded-lg shadow overflow-hidden">
                <div class="w-full lg:w-1/2 py-6 lg:pt-10 px-6 rounded-r bg-white order-1 lg:order-0">
                    <span class="text-sm text-gray-400">{formatDate(article.date)}</span>
                    <h2 class="my-4 text-2xl font-bold">{article.title}</h2>
                    <p class="mb-4 text-gray-400 leading-loose" dangerouslySetInnerHTML={{ __html: article.excerpt }} />
                    <Link href={`/blog/${article.slug}`}>
                        <a class="text-blue-600 hover:text-blue-700 font-bold">Learn More</a>
                    </Link>
                </div>
                <div class="w-full lg:w-1/2 rounded-l order-0 lg:order-1">
                    <Image className="object-cover" src={article.featuredImage?.node?.mediaItemUrl} alt={article.featuredImage?.node?.altText} height={1280} width={1920}  />
                </div>
            </div>
        </section>
    )
}