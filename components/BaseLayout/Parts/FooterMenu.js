import Link from 'next/link';
import React from 'react';

export default function FooterMenu({ items }) {
    return (
        <ul className="flex flex-wrap lg:space-x-5 items-center">
            {items.map((item, index) => {
                if (index === items.length - 1) {
                    return <MenuItem key={item.id} item={item} index={index} />;
                } else {
                    return (
                        <React.Fragment key={item.id}>
                            <MenuItem item={item} />
                            <MenuDivder />
                        </React.Fragment>
                    )
                }
            })}
        </ul>
    )
}

const MenuDivder = () => {
    return (
        <li className="hidden md:block">
            <svg className="mx-4 w-4 h-4 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
            </svg>
        </li>
    )
};

const MenuItem = ({ item }) => {
    return (
        <li className="w-full md:w-auto mb-2 md:mb-0">
            <Link href={item.slug}>
                <a className="lg:text-sm text-gray-400 hover:text-gray-500" >
                    {item.label}
                </a>
            </Link>
        </li>
    )
}