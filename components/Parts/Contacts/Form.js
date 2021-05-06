import { useRef, useState } from 'react';

export default function Form() {
    const contactForm = useRef();

    const [formProcessing, setFormProcessing] = useState(false);
    const [errors, setErrors] = useState();
    const [status, setStatus] = useState();

    const onClickHandler = async (e) => {
        e.preventDefault();
        if (formProcessing) return;
        setErrors(null);
        setFormProcessing(true);

        const form = new FormData(contactForm.current);

        const payload = {
            subject: form.get('subject'),
            name: form.get('name'),
            email: form.get('email'),
            message: form.get('message'),
            terms: form.get('terms'),
        };

        let response = await fetch('/api/email', {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        setFormProcessing(false);

        if (response.ok) {
            setStatus("Message sent succesfull!");
            contactForm.current.reset();
        } else {
            const result = await response.json();
            setErrors(result.error?.details);
            console.log(result);
        }
    };

    return (
        <section class="relative py-10 lg:h-screen container mx-auto">
            <div class="hidden lg:flex items-center absolute inset-0 w-2/5 bg-white">
                <img class="mx-auto" src="/technical-support-dark-green.png" alt="" />
            </div>
            <div class="lg:absolute inset-0 flex justify-center items-center ml-auto w-full lg:w-3/5">
                <div class="px-4">
                    <div class="max-w-md mx-auto p-10 bg-gray-100">
                        <h3 class="mb-6 text-2xl">Got any question? Let's talk about it.</h3>
                        <form ref={contactForm}>
                            <div class="mb-4">
                                <input class="w-full p-6 font-semibold leading-none bg-white rounded outline-none" type="text" placeholder="Subject" name="subject" />
                            </div>
                            <div class="mb-4">
                                <input class="w-full p-6 font-semibold leading-none bg-white rounded outline-none" type="text" placeholder="Name" name="name" />
                            </div>
                            <div class="mb-4">
                                <input class="w-full p-6 font-semibold leading-none bg-white rounded outline-none" type="email" placeholder="name@example.com" name="email" />
                            </div>
                            <div class="mb-4">
                                <textarea class="w-full h-24 p-4 font-semibold leading-none resize-none bg-white rounded outline-none" type="text" placeholder="Message..." name="message" />
                            </div>
                            <div class="mb-4">
                                <label>
                                    <input class="mr-1" type="checkbox" name="terms" name="terms" />
                                    <span class="text-sm font-semibold">I agree to terms and conditions.</span>
                                </label>
                            </div>
                            <div class="flex justify-end mt-3">
                                <button disabled={formProcessing} onClick={onClickHandler} class="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200">
                                    {formProcessing ? 'Please wait...' : 'Send message'}
                                </button>
                            </div>
                        </form>

                        {errors && (
                            <div className="flex justify-center w-full my-5">
                                <span className="bg-red-600 w-full rounded text-white px-3 py-3 text-center">
                                    Email not sent:
                                    <ul>
                                        {errors.map((error) => {
                                            return <li>{error.message}</li>
                                        })}
                                    </ul>
                                </span>
                            </div>
                        )}

                        {status && (
                            <div className="flex justify-center w-full my-5">
                                <span className="bg-green-600 w-full rounded text-white px-3 py-3 text-center">
                                    {status}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>

    )
}
