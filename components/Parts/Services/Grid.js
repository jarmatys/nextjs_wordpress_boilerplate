import SingleService from 'components/Parts/Services/Single';

export default function Grid() {
    return (
        <section>
            <div className="py-20 bg-gray-100 radius-for-skewed">
                <div className="container mx-auto px-4">
                    <div className="mb-16 flex flex-wrap justify-center md:justify-between items-center">
                        <div className="text-center lg:text-left">
                            <span className="text-blue-600 font-bold">Dolor sit amet consectutar</span>
                            <h2 className="text-4xl lg:text-5xl font-bold font-heading">Featured Projects</h2>
                        </div>
                        <a className="hidden md:inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-blue-600 hover:bg-blue-700 text-gray-50 font-bold leading-loose transition duration-200" href="#">View More Projects</a>
                    </div>
                    <div className="flex flex-wrap -mx-4 mb-4">
                        <SingleService />
                        <SingleService />
                        <SingleService />
                        <SingleService />
                        <SingleService />
                        <SingleService />
                    </div>
                    <div className="text-center">
                        <a className="md:hidden inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-blue-600 hover:bg-blue-700 text-gray-50 font-bold leading-loose transition duration-200" href="#">
                            View More Projects
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}
