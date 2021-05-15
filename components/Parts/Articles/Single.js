import Image from 'next/image';
import { formatDate } from 'utils/date';

export default function Single({ article }) {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <Image className="mb-12 rounded object-cover mx-auto" src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80" alt="" width={680} height={500} />
                    <h2 className="mb-12 mt-10 text-3xl lg:text-4xl font-bold font-heading">{article.title}</h2>
                    <div className="mb-12">
                        <h3 className="mb-4 text-2xl font-bold font-heading">{formatDate(article.date)}</h3>
                    </div>
                    <div>
                        <div className="wordpressArticle" dangerouslySetInnerHTML={{ __html: article.content }} />
                    </div>
                </div>
            </div>
        </section>
    )
}
