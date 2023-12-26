import me from '../../assets/me.png'
import { BiAtom } from "react-icons/bi";
import './Bannar.css'
import AnimatedCursor from 'react-animated-cursor';
const Banner = () => {
  const pdfFileName = import.meta.env.VITE_PUBLIC_URL;
  return (
    <div className='bg_img md:h-[400px] lg:h-[600px] max-w-6xl mx-auto'>
      <div className='flex flex-col md:flex-row lg:flex-row items-center gap-5'>
        <div className='w-full md:w-[40%] lg:w-[40%] md:mt-10 lg:mt-[50px]'>
          {/* Replace the image source with your actual image source */}
          <img className='md:h-[360px] lg:h-[550px] object-cover' src={me} alt="My Image" />
        </div>
        <div className='w-full md:w-[55%] lg:w-[50%]'>
          <BiAtom className=' text-pink-500 text-4xl mb-10' />
          <h3 className='md:text-xl text-white font-medium'>
            Hello! I’m Selim Reza. Web developer from Chuadanga,
            Dhaka, Bangladesh. I have little experience in website
            design and building. I
            love to talk with you about our unique.
          </h3>
          <div className=' flex justify-center md:justify-start'>
            <a href={import.meta.env.VITE_PUBLIC_URL} className='py-3 my-5 bg-slate-950 rounded-md w-[60%] md:w-[40%] text-center text-white' download={pdfFileName} >Download CV</a>
          </div>
        </div>
        <AnimatedCursor
          innerSize={25}
          outerSize={25}
          color='193, 11, 111'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={8}
          outerStyle={{ border: '1px solid gray' }}
        />
      </div>
    </div>
  );
};


export default Banner;