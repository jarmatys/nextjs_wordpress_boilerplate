import { formatDate } from 'utils/date';
import { addTailwindClassToRawHtml } from 'utils/gutenberg';

export default function ({ article }) {
    return (
        <section class="py-20">
            <div class="container mx-auto px-4">
                <div class="max-w-2xl mx-auto">
                    <img class="mb-12 rounded object-cover mx-auto" src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80" alt="" />
                    <h2 class="mb-12 text-3xl lg:text-4xl font-bold font-heading">{article.title}</h2>
                    <div class="mb-12">
                        <h3 class="mb-4 text-2xl font-bold font-heading">{formatDate(article.date)}</h3>
                    </div>
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: addTailwindClassToRawHtml(article.content) }} />
                    </div>
                </div>
            </div>
        </section>
    )
}
