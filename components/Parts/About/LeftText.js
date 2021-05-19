import Image from "next/image";
import Section from 'components/Section';

export default function LeftText({ id }) {
    return (
        <Section id={id}>
            <div className="py-20 bg-gray-50 radius-for-skewed">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center -mx-4">
                        <div className="mb-12 lg:mb-0 w-full lg:w-1/2 px-4">
                            <div className="max-w-md">
                                <span className="text-blue-600 font-bold">Dolor sit amet consectutar</span>
                                <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading">Build & Launch without problems</h2>
                                <ul>
                                    <li className="flex mb-4">
                                        <div>
                                            <svg className="mr-3 w-8 h-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                                            </svg>
                                        </div>
                                        <div className="max-w-xs">
                                            <h3 className="font-bold font-heading">Easy to Customize</h3>
                                            <p className="text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </li>
                                    <li className="flex mb-4">
                                        <div>
                                            <svg className="mr-3 w-8 h-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                                            </svg>
                                        </div>
                                        <div className="max-w-xs">
                                            <h3 className="font-bold font-heading">Flexible Software</h3>
                                            <p className="text-gray-500 leading-loose">Praesent viverra, nisi at placerat placerat, urna elit viverra magna, varius auctor mauris.</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div>
                                            <svg className="mr-3 w-8 h-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                                            </svg>
                                        </div>
                                        <div className="max-w-xs">
                                            <h3 className="font-bold font-heading">Best access for all of the resources</h3>
                                            <p className="text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center w-full lg:w-1/2 px-4">
                            <div className="mb-6 w-full lg:w-1/2 px-3">
                                <Image className="mb-10 w-full h-64 object-cover rounded-lg" src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="" height={245} width={256} />
                                <Image className="w-full h-64 object-cover rounded-lg" src="https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" alt="" height={245} width={256} />
                            </div>
                            <div className="w-full lg:w-1/2 px-3">
                                <Image className="w-full h-64 object-cover rounded-lg" src="https://images.unsplash.com/photo-1605201100110-1f07883d2882?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" height={245} width={256} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

