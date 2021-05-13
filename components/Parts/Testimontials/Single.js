export default function Single({ testimontial }) {
    return (
        <div className="mb-4 w-full lg:w-1/3 px-3">
            <div className="p-8 bg-white rounded shadow text-center">
                <div>
                    <p className="mb-8 text-gray-500 leading-loose">{testimontial.tekst}</p>
                    <h4 className="mb-1 text-2xl font-bold font-heading">{testimontial.person}</h4>
                    <p className="text-gray-500">{testimontial.postion}</p>
                </div>
            </div>
        </div>
    )
}