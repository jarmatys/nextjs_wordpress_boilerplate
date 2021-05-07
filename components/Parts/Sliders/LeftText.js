import Image from 'next/image';

export default function LeftText() {
    return (
        <div className="relative bg-gray-50 pt-20 pb-24 lg:py-40 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 px-4 flex items-center">
                        <div className="w-full text-center lg:text-left">
                            <Image src="/lines.svg" className="hidden lg:block absolute inset-0 w-full" layout="fill" />
                            <div className="relative max-w-md mx-auto lg:mx-0">
                                <h2 className="mb-3 text-4xl lg:text-5xl font-bold font-heading">
                                    <span>Build &amp; Launch without</span>
                                    <span className="text-blue-600"> problems</span>
                                </h2>
                            </div>
                            <div className="relative max-w-sm mx-auto lg:mx-0">
                                <p className="mb-6 text-gray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
                                <div><a className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" href="#">Get Started</a><a className="inline-block w-full lg:w-auto py-2 px-6 leading-loose font-semibold bg-white hover:bg-gray-50 rounded-l-xl rounded-t-xl transition duration-200" href="#">How it works</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4"><img className="lg:absolute top-0 my-12 lg:my-0 h-full w-full lg:w-1/2 rounded-3xl lg:rounded-none object-cover" src="https://images.unsplash.com/photo-1572521165329-b197f9ea3da6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}