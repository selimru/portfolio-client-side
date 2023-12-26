

const Projects = () => {
    return (
        <div className="bg-pink-500 py-10 md:py-20 lg:py-24 px-5 my-10 max-w-6xl mx-auto">
            <h2 className=' text-2xl md:text-5xl lg:text-7xl font-semibold text-center text-white mb-16'>My Projects</h2>
            <section className='  flex flex-col md:flex-row lg:flow-row mt-10 items-center justify-evenly  text-white'>
                <div className=" border-b border-white md:border-b-0 lg:border-b-0 md:border-r lg:border-r md:border-white lg:border-white md:pb-0 lg:pb-0 pb-5 md:pr-10 lg:pr-100">
                    <a target="blank" href="https://brand-shop-assignment-be609.web.app/" className=' font-extrabold text-xl md:text-2xl lg:text-3xl text-center'>Brand Shop</a>
                </div>
                <div className=" border-b border-white md:border-b-0 lg:border-b-0 md:border-r lg:border-r md:border-white lg:border-white md:pb-0 lg:pb-0 pb-5 md:pr-10 lg:pr-10">
                    <a target=" blank" href="https://community-food-sharing-70abe.web.app/availableFoods" className='font-extrabold text-xl md:text-2xl lg:text-3xl text-center' >Food Sharing</a>
                </div>
                <div className=" border-b border-white md:border-b-0 lg:border-b-0 md:border-r lg:border-r md:border-white lg:border-white md:pb-0 lg:pb-0 pb-5 md:pr-10 lg:pr-10">
                    <a href="https://fanciful-blini-5c1636.netlify.app/" target="blank" className=' text-xl md:text-2xl lg:text-3xl font-extrabold text-center'>Skill Development</a>
                </div>
            </section>
        </div>
    );
};

export default Projects;