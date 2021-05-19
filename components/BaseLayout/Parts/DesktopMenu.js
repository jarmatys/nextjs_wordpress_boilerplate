import Link from 'next/link';
import React from 'react';
import { scrollTo } from 'utils/general';

export default function DesktopMenu({ items }) {
    return (
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
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
        <li className="text-gray-300">
            <svg className="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
            </svg>
        </li>
    )
};

const MenuItem = ({ item }) => {
    if (item.isRedirect) {
        return (
            <li>
                <Link href={item.slug}>
                    <a className="text-sm text-gray-400 hover:text-gray-500">
                        {item.label}
                    </a>
                </Link>
            </li>
        )
    }
    else {
        if(item.isIndex){
            return (
                <li>
                    <a onClick={() => scrollTo(item.destination)} className="text-sm text-gray-400 hover:text-gray-500 cursor-pointer">
                        {item.label}
                    </a>
                </li>
            )
        } else {
            return null;
        }
        
    }
}