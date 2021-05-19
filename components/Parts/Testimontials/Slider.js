import SingleTestimontial from 'components/Parts/Testimontials/Single';
import { useState } from 'react';
import classNames from 'classnames';
import { countTestimontials } from 'utils/views/testimontials';
import Section from 'components/Section';

export default function Slider({ testimontials }) {

    const [currentTestimontials, setCurrentTestimontials] = useState(testimontials.slice(0, 3))
    const [firstTestimontial, setFirstTestimontial] = useState(0);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const [slide, setSlide] = useState(false);

    const handleLeftArrow = (firstTestimontial) => {
        let postion = firstTestimontial - 1;
        setCurrentTestimontials(testimontials.slice(postion, postion + 3))
        setFirstTestimontial(postion);

        if (postion === 0) {
            setShowRightArrow(true);
            setShowLeftArrow(false);
        }

        setSlide(true);
    }

    const handleRightArrow = (firstTestimontial) => {
        let postion = firstTestimontial + 1;
        setCurrentTestimontials(testimontials.slice(postion, postion + 3))
        setFirstTestimontial(postion);

        if (postion === testimontials.length - 3) {
            setShowRightArrow(false);
        }

        if (firstTestimontial === 0) {
            setShowLeftArrow(true);
        }

        setSlide(true);
    }

    if (countTestimontials(testimontials) >= 3) {
        return (
            <Section>
                <div className="py-20 bg-gray-100 radius-for-skewed overflow-hidden">
                    <div className="max-w-6xl mx-auto px-4 pb-6 lg:pb-16">
                        <div className="flex flex-wrap justify-center lg:justify-between items-center text-center lg:text-left">
                            <div className="w-full lg:w-4/5 mb-4 lg:mb-0">
                                <span className="text-blue-600 font-bold">Dolor sit amet consectutar</span>
                                <h2 className="text-4xl lg:text-5xl font-bold font-heading">Testimonials</h2>
                            </div>
                            {countTestimontials(testimontials) > 3 &&
                                <div className="w-full lg:w-1/5">
                                    <button disabled={!showLeftArrow} onClick={() => handleLeftArrow(firstTestimontial)} className={classNames("mr-4 bg-white p-5 rounded-full shadow-md text-blue-600 hover:text-blue-700 transition duration-200", { "opacity-30": !showLeftArrow })}>
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                                        </svg>
                                    </button>
                                    <button disabled={!showRightArrow} onClick={() => handleRightArrow(firstTestimontial)} className={classNames("mr-4 bg-white p-5 rounded-full shadow-md text-blue-600 hover:text-blue-700 transition duration-200", { "opacity-30": !showRightArrow })}>
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="relative flex">
                        <div className={classNames("flex flex-wrap max-w-6xl px-2 mx-auto", {"animate-slide": slide})} onAnimationEnd={() => setSlide(false)}>
                            {currentTestimontials.map((testimontial) => {
                                return <SingleTestimontial key={testimontial.node.id} testimontial={testimontial.node} />;
                            })}
                        </div>
                    </div>
                </div>
            </Section>
        );
    } else {
        return null;
    }
}

