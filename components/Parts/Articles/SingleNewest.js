import Image from 'next/image';

export default function SingleNewest() {
    return (
        <div className="mb-6 w-full lg:w-1/4 px-3">
            <div className="rounded overflow-hidden shadow">
            <Image className="lg:h-48 rounded-t" src="https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80" alt="" width={260} height={200} />
                <div className="p-6 rounded-b bg-white">
                    <span className="text-sm text-gray-400">24 Jan, 2021</span>
                    <h2 className="my-2 text-2xl font-bold">Morbi scelerisque nulla et lectus</h2>
                    <a className="text-blue-600 hover:text-blue-700 font-bold" href="#">
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    )
}