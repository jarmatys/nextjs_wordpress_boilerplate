export default function () {
    return (
        <section>
            <div class="skew skew-top mr-for-radius">
                <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewbox="0 0 10 10" preserveaspectratio="none">
                    <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
                </svg>
            </div>
            <div class="skew skew-top ml-for-radius">
                <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewbox="0 0 10 10" preserveaspectratio="none">
                    <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
                </svg>
            </div>
            <div class="py-10 mb-10 bg-gray-50 radius-for-skewed">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap items-center">
                        <div class="w-full lg:w-1/2 text-center lg:text-left">
                            <span class="text-blue-600 font-bold">Dolor sit amet consectutar</span>
                            <h2 class="text-4xl lg:text-5xl font-bold font-heading">Our Blog</h2>
                        </div>
                        <div class="hidden lg:block text-right w-1/2">
                            <a class="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-blue-600 hover:bg-blue-700 text-gray-50 font-bold leading-loose transition duration-200" href="#">View More Articles</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}