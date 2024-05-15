import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className=' bg-orange-300 py-5'>
            <div className='max-w-6xl flex justify-between mx-auto'>
                <span className='font-bold text-2xl'>CareerCentral</span>
                <ul className='list-none flex gap-3 me-5 text-white'>
                    <li>
                        <Link to='/applied-jobs'>Applied Jobs</Link>
                    </li>
                    <li><Link to='/statistics'>Statistics</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>

                </ul>
                <span><button className='text-white font-bold px-3 py-2 rounded bg-blue-400'>Start Applying</button></span>
            </div>
        </nav>
    );
};

export default NavBar;