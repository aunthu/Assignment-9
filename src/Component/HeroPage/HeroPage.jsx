import React from 'react';
import HeroImg from '../images/user.png'
const HeroPage = () => {
    return (
        <div className=' md:flex  gap-2 items-start space-y-2 lg:space-y-0  mb-8'>
            <div className='w-1/2 border mx-auto self-center'>
                <h1 className='text-5xl font-bold leading-tight mb-2'>One Step <br /> Closer To Your<br />
                    <span className='text-[#7E90FE]'>Dream Job</span>
                </h1>
                <p className='text-[#757575] leading-8 mb-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='px-3 py-2 rounded bg-[#7E90FE] text-white font-semibold'>Get Started</button>
            </div>
            <div className='w-1/2 border mx-auto'>
                <img src={HeroImg} alt="img" />
            </div>
        </div>
    );
};

export default HeroPage;