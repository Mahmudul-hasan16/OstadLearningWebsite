import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './shared/Sidebar'

const Courses = () => {
  const [category, setCategory] = useState([])
  useEffect(() => {
    fetch('https://server-ostad-mahmudul-hasan16.vercel.app/category')
      .then(res => res.json())
      .then(data => setCategory(data))
  }, [])
  return (
    <div className='grid grid-cols-10 '>
      {/* this section is our sidebar */}
      <div className='md:col-span-2'><Sidebar category={category}></Sidebar></div>
      {/* this is our course section */}
      <div className='col-span-8 md:pl-10'>
        <Outlet />
      </div>
    </div>
  );
};

export default Courses;