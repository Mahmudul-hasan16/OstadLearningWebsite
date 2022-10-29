import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header'
import Sidebar from '../pages/shared/Sidebar';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            
        </div>
    );
};

export default Main;