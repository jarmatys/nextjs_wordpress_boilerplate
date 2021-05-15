import BaseLayout from 'components/BaseLayout';
import SimpleHeader from 'components/Parts/Breadcrumbs/Simple';
import MetaTags from 'components/MetaTags';
import { useState } from 'react';
import className from 'classnames';

export default function Test() {
    const [wiggle, setWiggle] = useState(false);
    const [spin, setSpin] = useState(false);
    const [slide, setSlide] = useState(false);

    return (
        <div>
            <MetaTags title="Test components" />
            <main>
                <BaseLayout>
                    <SimpleHeader h2Text="Test components" spanText="Here test components" />
                    <section className="container mx-auto my-12">
                        <button
                            className={className("bg-blue-500 p-4 text-white rounded hover:bg-blue-700 hover:shadow-xl", { "animate-wiggle": wiggle })}
                            onClick={() => { setWiggle(true); }}
                            onAnimationEnd={() => setWiggle(false)}
                        >
                            Wiggle wiggle...
                        </button>

                        <button
                            className={className("bg-blue-500 p-4 text-white rounded hover:bg-blue-700 hover:shadow-xl", { "animate-spin": spin })}
                            onClick={() => { setSpin(true); }}
                            onAnimationEnd={() => setSpin(false)}
                        >
                            Spin ...
                        </button>

                        <button
                            className={className("bg-blue-500 p-4 text-white rounded hover:bg-blue-700 hover:shadow-xl", { "animate-slide": slide })}
                            onClick={() => { setSlide(true); }}
                            onAnimationEnd={() => setSlide(false)}
                        >
                            Slide slide ...
                        </button>
                    </section>
                </BaseLayout>
            </main>
        </div>
    );
}
