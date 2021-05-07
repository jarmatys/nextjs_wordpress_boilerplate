import Link from 'next/link';

export default function Blog({ h2Text, spanText, buttonText, link }) {

    const renderButton = () => {
        if (buttonText || link) {
            return (
                <div className="hidden lg:block text-right w-1/2">
                    <Link href={link}>
                        <a className="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-blue-600 hover:bg-blue-700 text-gray-50 font-bold leading-loose transition duration-200" >{buttonText}</a>
                    </Link>
                </div>
            )
        }
    }

    return (
        <section>
            <div className="py-10 mb-10 bg-gray-100 radius-for-skewed">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <span className="text-blue-600 font-bold">{spanText}</span>
                            <h2 className="text-4xl lg:text-5xl font-bold font-heading">{h2Text}</h2>
                        </div>
                        {renderButton()}
                    </div>
                </div>
            </div>
        </section>
    )
}