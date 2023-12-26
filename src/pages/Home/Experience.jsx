import CountUp from 'react-countup';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTailwindcss } from "react-icons/si";

const Experience = () => {
    return (
        <div className=' bg-slate-950 max-w-6xl mx-auto py-24'>
            <h2 className=' text-2xl md:text-5xl lg:text-7xl font-semibold text-center text-white mb-16'>My Skills</h2>
            <div className=' flex flex-col md:flex-row lg:flex-row items-center justify-evenly gap-5'>
                <div>
                    <div className=' shadow-md shadow-slate-600 p-5'>
                        <FaReact className='text-center text-pink-500 text-6xl mb-3' />
                        <div className=' flex flex-row gap-2'>
                            <CountUp className='text-center text-pink-500 text-6xl' start={0} end={50} duration={10} />
                            <p className='text-center text-pink-500 text-5xl'>%</p>
                        </div>
                    </div>
                    <h3 className='text-center text-pink-500 text-4xl mt-3'>React</h3>
                </div>
                <div>
                    <div className=' shadow-md shadow-slate-600 p-5'>
                        <IoLogoJavascript className='text-center text-yellow-200 text-6xl mb-3' />
                        <div className=' flex flex-row gap-2'>
                            <CountUp className='text-center text-yellow-200 text-6xl' start={0} end={70} duration={10} />
                            <p className='text-center text-yellow-200 text-6xl'>%</p>
                        </div>
                    </div>
                    <h3 className='text-center text-yellow-200 text-4xl mt-3'>Javascript</h3>
                </div>
                <div>
                    <div className=' shadow-md shadow-slate-600 p-5'>
                        <FaNodeJs className='text-center text-green-500 text-6xl mb-3' />
                        <div className=' flex flex-row gap-2'>
                            <CountUp className='text-center text-green-500 text-6xl' start={0} end={30} duration={10} />
                            <p className='text-center text-green-500 text-6xl'>%</p>
                        </div>
                    </div>
                    <h3 className='text-center text-green-500 text-4xl mt-3'>Node.js</h3>
                </div>
                <div>
                    <div className=' shadow-md shadow-slate-600 p-5'>
                        <SiTailwindcss className=' text-sky-200 text-6xl mb-3' />
                        <div className=' flex flex-row gap-2'>
                            <CountUp className='text-center text-sky-200 text-6xl' start={0} end={70} duration={10} />
                            <p className='text-center text-sky-200 text-6xl'>%</p>
                        </div>
                    </div>
                    <h3 className='text-center text-sky-200 text-4xl mt-3'>Tailwind</h3>
                </div>
            </div>
        </div>
    );
};

export default Experience;