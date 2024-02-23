import FormEmail from "./FormEmail";

const Contact = () => {
    return (
        <div className=" max-w-6xl mx-auto " id='contact'>
            <section className="md:py-24 lg:py-24">
                <h1 className=" text-2xl md:text-5xl lg:text-7xl font-bold text-center text-black py-6">Get In Touch</h1>
                {/* <h3 className=" text-xl md:text-4xl lg:text-5xl font-bold text-center text-black">You're launching a business and we <br />
                    can help you make it look pretty.</h3> */}
            </section>
            <section className=" bg-pink-200 flex flex-col md:flex-row lg:flex-row justify-evenly py-10 text-center">
                <div className=" border-b border-pink-400 md:border-b-0 lg:border-b-0 md:border-r md:border-pink-400 py-3 md:pr-5 lg:pr-10">
                    <h3 className=" text-lg md:text-xl lg:text-2xl">Contact</h3>
                    <p className=" md:text-xl lg:text-2xl hover:text-pink-500" >01717195101</p>
                </div>
                <div className=" border-b border-pink-400 md:border-r md:border-pink-400 py-3 md:pr-5 lg:pr-10 md:border-b-0 lg:border-b-0">
                    <h3 className="text-lg md:text-xl lg:text-2xl">Email</h3>
                    <p className=" md:text-xl lg:text-2xl hover:text-pink-500">selim.ru.11.92@gmail.com</p>
                </div>
                <div className=" border-b border-pink-400 md:border-r md:border-pink-400 py-3 md:pr-5 lg:pr-10 md:border-b-0 lg:border-b-0">
                    <h3 className="text-lg md:text-xl lg:text-2xl">Address</h3>
                    <p className=" md:text-xl lg:text-2xl hover:text-pink-500" >Chuadanga,Dhaka,Bangladesh</p>
                </div>
            </section>
            <section className=" pt-20 bg-black py-10">
                <FormEmail />
            </section>
            <section className=' bg-pink-500 flex flex-col md:flex-row lg:flow-row mt-10 items-center justify-evenly py-10 md:py-20 lg:py-24 px-5 text-white my-10'>
                <div className=" border-b border-white md:border-b-0 lg:border-b-0 md:border-r lg:border-r md:border-white lg:border-white md:pb-0 lg:pb-0 pb-5 md:pr-10 lg:pr-10">
                    <a target="blank" href="https://www.linkedin.com/in/md-selim-reza-915aa4273/" className=' font-extrabold text-xl md:text-3xl lg:text-6xl'>Facebook</a>
                </div>
                <div className=" border-b border-white md:border-b-0 lg:border-b-0 md:border-r lg:border-r md:border-white lg:border-white md:pb-0 lg:pb-0 pb-5 md:pr-10 lg:pr-10">
                    <a target=" blank" href="https://www.instagram.com/" className='font-extrabold text-xl md:text-3xl lg:text-6xl' >Linkedin</a>
                </div>
                <div className=" border-b border-white md:border-b-0 lg:border-b-0 md:border-r lg:border-r md:border-white lg:border-white md:pb-0 lg:pb-0 pb-5 md:pr-10 lg:pr-10">
                    <a href="https://web.facebook.com/rajotto.razz" target="blank" className=' text-xl md:text-3xl lg:text-6xl font-extrabold'>Instagram</a>
                </div>
            </section>
        </div>
    );
};

export default Contact;