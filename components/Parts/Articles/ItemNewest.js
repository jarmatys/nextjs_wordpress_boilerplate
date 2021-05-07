import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from 'utils/date';

export default function ItemNewest({ article }) {
    return (
        <div className="mb-6 w-full lg:w-1/4 px-3">
            <div className="rounded overflow-hidden shadow">
                <Image src="https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80" className="lg:h-48 rounded-t" alt="" width={260} height={200} />
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