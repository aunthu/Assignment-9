import React from 'react';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import NavBar from '../NavBar/NavBar';

const Main = () => {
    return (
        <div >
            {/* Main Compo */}
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Toaster />
        </div>
    );
};

export default Main;