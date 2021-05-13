import Link from 'next/link';

export default function MobileMenu({ items }) {
    return (
        <ul>
            {items.map((item) => {
                return (
                    <li key={item.id} className="mb-1">
                        <Link href={item.slug}>
                            <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                                {item.label}
                            </a>
                        </Link>
                    </li>
                );
            })}
        </ul>
    )
}


