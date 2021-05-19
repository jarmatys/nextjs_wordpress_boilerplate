import Link from 'next/link';

import ItemNewest from 'components/Parts/Articles/ItemNewest';
import { countArticles } from 'utils/views/articles';
import Section from 'components/Section';

export default function Newest({ articles }) {

    const renderArticles = (articles) => {
        if (countArticles(articles) >= 4) {
            return articles.map(({ node }) => (
                <ItemNewest key={node.id} article={node} />
            ));
        }
    };

    if (countArticles(articles) >= 4) {
        return (
            <Section>
                <div className="py-20 bg-gray-50 radius-for-skewed">
                    <div className="container mx-auto px-4">
                        <div className="mb-6 flex flex-wrap justify-center">
                            <div className="mb-16 w-full text-center">
                                <span className="text-blue-600 font-bold">Dolor sit amet consectutar</span>
                                <h2 className="text-4xl lg:text-5xl font-bold font-heading">Our Blog</h2>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-16">
                                <div className="flex flex-wrap w-full">
                                    {renderArticles(articles)}
                                </div>
                            </div>
                            <div>
                                <Link href='/blog/'>
                                    <a className="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-blue-600 hover:bg-blue-700 text-gray-50 font-bold leading-loose outline-none transition duration-200">
                                        View More Articles
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        )
    } else {
        return (null);
    }
}
