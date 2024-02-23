import me from '../../assets/me.png'
import { BiAtom } from "react-icons/bi";
import './Bannar.css'
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  // const { downloadCV } = useContext(FunctionContext)
  const pdfFileName = `https://drive.google.com/uc?id=${import.meta.env.VITE_PDF_LINK}`;
  return (
    <div className='bg_img md:h-[400px] lg:h-[600px] max-w-6xl mx-auto'>
      <div className=' text-center py-5 font-semibold md:text-2xl lg:text-3xl text-white lg:text-pink-500'>
        <TypeAnimation
          sequence={[
            'Building responsive and user-friendly interfaces',
            1000,
            'Crafting engaging and interactive user experiences',
            1000,
            'Optimizing web performance for seamless loading',
            1000,
            'Implementing state-of-the-art design patterns',
            1000
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>
      <div className='flex flex-col md:flex-row lg:flex-row items-center lg:gap-5 justify-evenly'>
        <div >
          <img className=' h-[250px] w-[250px] lg:h-[400px] lg:w-[400px] rounded-full bg-black p-2' src={me} alt="My Image" />
        </div>
        <div className='w-full md:w-[55%] lg:w-[50%]'>
          <BiAtom className=' text-pink-500 text-4xl mb-10' />
          <h3 className='md:text-xl text-white font-medium text-center'>
            Hello ! I’m Selim Reza, Web developer from Chuadanga,
            Dhaka, Bangladesh.I have experience in website
            design and building. I
            love to talk with you about our unique.
          </h3>
          <div className=' flex justify-center md:justify-start'>
            <a href={pdfFileName} className='py-3 my-5 bg-slate-950 rounded-md w-[60%] md:w-[40%] text-center text-pink-500' download >Download CV</a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Banner;