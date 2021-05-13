export default function Single({ testimontial }) {
    return (
        <div className="mb-4 w-full lg:w-1/3 px-3">
            <div className="p-8 bg-white rounded shadow text-center">
                <div>
                    <p className="mb-8 text-gray-500 leading-loose">{testimontial.addons.text}</p>
                    <h4 className="mb-1 text-2xl font-bold font-heading">{testimontial.addons.name}</h4>
                    <p className="text-gray-500">{testimontial.addons.work}</p>
                </div>
            </div>
        </div>
    )
}