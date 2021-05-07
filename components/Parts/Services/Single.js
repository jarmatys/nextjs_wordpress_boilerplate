import Image from 'next/image';

export default function Single() {
    return (
        <div className="mb-8 w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="bg-white rounded">
                <Image className="rounded-t object-cover h-128" src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80" alt="" width={350} height={350} />
                <div className="p-6">
                    <span className="text-gray-400">2021</span>
                    <h3 className="mb-4 text-2xl font-bold font-heading">Curabitur imperdiet feugiat cursus</h3>
                    <a className="flex text-blue-600 hover:text-blue-700 font-bold" href="#">
                        View Case Study
                    </a>
                </div>
            </div>
        </div>
    )
}