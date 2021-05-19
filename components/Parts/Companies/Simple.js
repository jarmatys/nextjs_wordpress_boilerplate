import Image from 'next/image';
import Section from 'components/Section';

export default function Simple() {
    return (
        <Section className="py-20">
            <div className="container mx-auto px-4 text-center">
                <h3 className="mb-16 text-2xl font-heading">Trusted by brands all over the world</h3>
                <div className="flex flex-wrap -mx-2">
                    <div className="mb-12 lg:mb-0 w-full md:w-1/3 lg:w-1/6 px-2">
                        <Image className="mx-auto h-6" src="/slack.png" alt="" width={90} height={24} />
                    </div>
                    <div className="mb-12 lg:mb-0 w-full md:w-1/3 lg:w-1/6 px-2">
                        <Image className="mx-auto h-6" src="/dropbox.png" alt="" width={90} height={24} />
                    </div>
                    <div className="mb-12 lg:mb-0 w-full md:w-1/3 lg:w-1/6 px-2">
                        <Image className="mx-auto h-6" src="/spotify.png" alt="" width={90} height={24} />
                    </div>
                    <div className="mb-12 md:mb-0 w-full md:w-1/3 lg:w-1/6 px-2">
                        <Image className="mx-auto h-6" src="/amazon.png" alt="" width={90} height={24} />
                    </div>
                    <div className="mb-12 md:mb-0 w-full md:w-1/3 lg:w-1/6 px-2">
                        <Image className="mx-auto h-6" src="/netflix.png" alt="" width={90} height={24} />
                    </div>
                    <div className="w-full md:w-1/3 lg:w-1/6 px-2">
                        <Image className="mx-auto h-6" src="/stripe.png" alt="" width={90} height={24} />
                    </div>
                </div>
            </div>
        </Section>
    )
}
