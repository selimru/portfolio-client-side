import { Footer } from "flowbite-react";
import me from '../assets/me.png'

const FooterPage = () => {
    return (
        <div>
            <Footer container className="  bg-pink-100">
                <div className="w-full text-center">
                    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between gap-5">
                        <div className=" flex items-center gap-3">
                            <img className=" w-[40px] h-[40px] rounded-full" src={me} alt="" />
                            <h3 className=' text-xl md:text-2xl lg:text-3xl text-black font-extrabold'>Se<span className=' text-pink-500'>lim</span></h3>
                        </div>
                        <Footer.LinkGroup className=" gap-4">
                            <Footer.Link href="#">About</Footer.Link>
                            <Footer.Link href="#">Privacy Policy</Footer.Link>
                            <Footer.Link href="#">Licensing</Footer.Link>
                            <Footer.Link href="#">Contact</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <Footer.Divider />
                    <Footer.Copyright href="#" by="Selim™" year={2022} />
                </div>
            </Footer>
        </div>
    );
};

export default FooterPage;