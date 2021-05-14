import Image from 'next/image';

export default function SocialMedia() {
    return (
        <div className="mb-4 lg:mb-0 order-first lg:order-last">
            <a className="inline-block mr-2 p-2 bg-gray-50 hover:bg-gray-100 rounded" href="#">
                <Image src="/facebook.svg" height={22} width={22} />
            </a>
            <a className="inline-block mr-2 p-2 bg-gray-50 hover:bg-gray-100 rounded" href="#">
                <Image src="/twitter.svg" height={22} width={22} />
            </a>
            <a className="inline-block mr-2 p-2 bg-gray-50 hover:bg-gray-100 rounded" href="#">
                <Image src="/instagram.svg" height={22} width={22} />
            </a>
        </div>
    )
}