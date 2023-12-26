import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const FormEmail = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5twew7q', 'template_9f5e09i', form.current, 'RTIyitRtARwvtGOZ4')
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <h1 id='form' className=" text-2xl md:text-5xl lg:text-7xl text-center font-bold text-white">By all means, send me an email and get in
                touch.</h1>
            <section className=' py-10'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="flex flex-col gap-4 justify-center">
                        <div className=' flex flex-col md:flex-row lg:flex-row items-center justify-center gap-5'>
                            <div className='w-full md:w-[30%] lg:w-[30%]'>
                                <TextInput name='from_name' placeholder='Name' id="small" type="text" sizing="md" />
                            </div>
                            <div className=' w-full md:w-[30%] lg:w-[30%]'>
                                <TextInput name='email' placeholder='Email' id="base" type="email" sizing="md" />
                            </div>
                        </div>
                        <div className=' w-full md:w-[62%] lg:w-[62%] mx-auto'>
                            <Textarea name='message' className=' h-[250px]' placeholder='Message' id="large" type="text" sizing="lg" />
                        </div>
                    </div>
                    <Button type='submit' className=' mt-5 bg-pink-500 rounded-md border border-white w-[15%] mx-auto text-white'>Send</Button>
                </form>
            </section>
        </div>
    );
};

export default FormEmail;