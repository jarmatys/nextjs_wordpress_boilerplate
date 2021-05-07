

export default function Grid() {
    return (
        <section>
            <div className="skew skew-top mr-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
                </svg>
            </div>
            <div className="skew skew-top ml-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
                </svg>
            </div>
            <div className="py-20 bg-gray-50 radius-for-skewed">
                <div className="container mx-auto px-4">
                    <div className="mb-16 flex flex-wrap justify-center md:justify-between items-center">
                        <div className="text-center lg:text-left">
                            <span className="text-blue-600 font-bold">Dolor sit amet consectutar</span>
                            <h2 className="text-4xl lg:text-5xl font-bold font-heading">Featured Projects</h2>
                        </div>
                        <a className="hidden md:inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-blue-600 hover:bg-blue-700 text-gray-50 font-bold leading-loose transition duration-200" href="#">View More Projects</a>
                    </div>
                    <div className="flex flex-wrap -mx-4 mb-4">
                        <div className="mb-8 w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="bg-white rounded">
                                <img className="rounded-t object-cover h-128" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="" />
                                <div className="p-6">
                                    <span className="text-gray-400">2021</span>
                                    <h3 className="mb-4 text-2xl font-bold font-heading">Lorem ipsum dolor sit amet consectutar</h3>
                                    <a className="flex text-blue-600 hover:text-blue-700 font-bold" href="#">
                                        <svg className="mr-3 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>View Case Study</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mb-8 w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="bg-white rounded">
                                <img className="rounded-t object-cover h-128" src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80" alt="" />
                                <div className="p-6">
                                    <span className="text-gray-400">2021</span>
                                    <h3 className="mb-4 text-2xl font-bold font-heading">Curabitur imperdiet feugiat cursus</h3>
                                    <a className="flex text-blue-600 hover:text-blue-700 font-bold" href="#">
                                        <svg className="mr-3 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>View Case Study</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mb-8 w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="bg-white rounded">
                                <img className="rounded-t object-cover h-128" src="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=968&amp;q=80" alt="" />
                                <div className="p-6">
                                    <span className="text-gray-400">2021</span>
                                    <h3 className="mb-4 text-2xl font-bold font-heading">Nullam imperdiet lorem at accumsan interdum</h3>
                                    <a className="flex text-blue-600 hover:text-blue-700 font-bold" href="#">
                                        <svg className="mr-3 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>View Case Study</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mb-8 w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="bg-white rounded">
                                <img className="rounded-t object-cover h-128" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="" />
                                <div className="p-6">
                                    <span className="text-gray-400">2021</span>
                                    <h3 className="mb-4 text-2xl font-bold font-heading">Lorem ipsum dolor sit amet consectutar</h3>
                                    <a className="flex text-blue-600 hover:text-blue-700 font-bold" href="#">
                                        <svg className="mr-3 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>View Case Study</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mb-8 w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="bg-white rounded">
                                <img className="rounded-t object-cover h-128" src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80" alt="" />
                                <div className="p-6">
                                    <span className="text-gray-400">2021</span>
                                    <h3 className="mb-4 text-2xl font-bold font-heading">Curabitur imperdiet feugiat cursus</h3>
                                    <a className="flex text-blue-600 hover:text-blue-700 font-bold" href="#">
                                        <svg className="mr-3 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>View Case Study</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mb-8 w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="bg-white rounded">
                                <img className="rounded-t object-cover h-128" src="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=968&amp;q=80" alt="" />
                                <div className="p-6">
                                    <span className="text-gray-400">2021</span>
                                    <h3 className="mb-4 text-2xl font-bold font-heading">Nullam imperdiet lorem at accumsan interdum</h3>
                                    <a className="flex text-blue-600 hover:text-blue-700 font-bold" href="#">
                                        <svg className="mr-3 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>View Case Study</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center"><a className="md:hidden inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-blue-600 hover:bg-blue-700 text-gray-50 font-bold leading-loose transition duration-200" href="#">View More Projects</a></div>
                </div>
            </div>
            <div className="skew skew-bottom mr-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
                </svg>
            </div>
            <div className="skew skew-bottom ml-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
                </svg>
            </div>
        </section>

    )
}
