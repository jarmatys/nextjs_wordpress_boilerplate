import classNames from "classnames";
import { useState, useEffect, useRef } from 'react';

export default function Section({ children, id, className }) {
    const elementRef = useRef()

    const [scroll, setScroll] = useState(false);
    const [run, setRun] = useState(false);

    useEffect(() => {
        const posY = elementRef.current.getBoundingClientRect().top + window.pageYOffset;
        if (!run) {
            window.addEventListener("scroll", () => {
                setScroll(window.scrollY > posY - window.innerHeight + 100);
                setRun(true);
            });
        }
    }, []);

    return (
        <section id={id} className={classNames(className, { "animate-slideIn": scroll })} ref={elementRef}>
            {children}
        </section>
    )
}