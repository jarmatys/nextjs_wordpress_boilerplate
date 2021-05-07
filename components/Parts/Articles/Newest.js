import SingleNewest from 'components/Parts/Articles/SingleNewest';

export default function Newest() {
    return (
        <section>
            <div className="py-20 bg-gray-50 radius-for-skewed">
                <div className="container mx-auto px-4">
                    <div className="mb-6 flex flex-wrap justify-center">
                        <div className="mb-16 w-full text-center">
                            <span className="text-blue-600 font-bold">Dolor sit amet consectutar</span>
                            <h2 className="text-4xl lg:text-5xl font-bold font-heading">Our Blog</h2>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-16">
                            <div className="flex flex-wrap w-full">
                               <SingleNewest />
                               <SingleNewest />
                               <SingleNewest />
                               <SingleNewest />
                            </div>
                        </div>
                        <div>
                            <a className="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-blue-600 hover:bg-blue-700 text-gray-50 font-bold leading-loose outline-none transition duration-200" href="#">
                                View More Articles
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
