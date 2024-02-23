import { Button, Navbar, } from 'flowbite-react';
import { useContext } from 'react';
import { FunctionContext } from '../hooks/Context';

const NavPage = () => {
    const { scrollToElement } = useContext(FunctionContext)
    return (
        <div className='bg-pink-100'>
            <Navbar fluid rounded className=' bg-pink-100 max-w-6xl mx-auto'>
                <Navbar.Brand >
                    <h3 className=' text-xl md:text-3xl lg:text-5xl text-black font-extrabold'>Se<span className=' text-pink-500'>lim</span></h3>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button className=' mr-3' gradientMonochrome="pink">
                        <a onClick={() => scrollToElement('contact')}>Let's Talk
                        </a>
                    </Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <a onClick={() => scrollToElement('home')}>Home</a>
                    <a onClick={() => scrollToElement('about')}>About</a>
                    <a onClick={() => scrollToElement('contact')}>Contact</a>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavPage;