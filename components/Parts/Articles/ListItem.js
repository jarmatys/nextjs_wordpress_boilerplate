import Link from 'next/link';
import { formatDate } from 'utils/date';

export default function ({ article }) {
    return (
        <section>
            <div class="mb-8 flex flex-wrap rounded-lg shadow overflow-hidden">
                <div class="w-full lg:w-1/2 py-6 lg:pt-10 px-6 rounded-r bg-white order-1 lg:order-0">
                    <span class="text-sm text-gray-400">{formatDate(article.date)}</span>
                    <h2 class="my-4 text-2xl font-bold">{article.title}</h2>
                    <p class="mb-4 text-gray-400 leading-loose">Quisque id sagittis turpis. Nulla sollicitudin rutrum eros eu dictum. Integer sit amet erat sit amet lectus lacinia mattis. Donec est tortor, fermentum at urna a, accumsan suscipit sem.</p>
                    <Link href={`/blog/${article.slug}`}>
                        <a class="text-green-600 hover:text-green-700 font-bold">Learn More</a>
                    </Link>
                </div>
                <div class="w-full lg:w-1/2 rounded-l order-0 lg:order-1">
                    <img class="object-cover" src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=968&amp;q=80" alt="" />
                </div>
            </div>
        </section>
    )
}