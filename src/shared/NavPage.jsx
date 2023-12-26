import { Button, Navbar, } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';

const NavPage = () => {

    return (
        <div className='bg-pink-100'>
            <Navbar fluid rounded className=' bg-pink-100 max-w-6xl mx-auto'>
                <Navbar.Brand >
                    <h3 className=' text-xl md:text-3xl lg:text-5xl text-black font-extrabold'>Se<span className=' text-pink-500'>lim</span></h3>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button className=' mr-3' gradientMonochrome="pink"><Link to='/contact'>Let's Talk</Link></Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <NavLink to="/"
                        className={({ isActive }) =>
                            isActive ? " text-pink-500" : ""
                        }>
                        Home
                    </NavLink>
                    <NavLink to="/about"
                        className={({ isActive }) =>
                            isActive ? " text-pink-500" : ""
                        }>About</NavLink>
                    <NavLink to="/contact"
                        className={({ isActive }) =>
                            isActive ? " text-pink-500" : ""
                        }>Contact</NavLink>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavPage;