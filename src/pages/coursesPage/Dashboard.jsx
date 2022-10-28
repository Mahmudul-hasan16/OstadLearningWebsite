import React from 'react';
import { SiCoursera } from 'react-icons/si';
import { AiOutlineCode } from 'react-icons/ai';
import { MdIntegrationInstructions } from 'react-icons/md';

const Dashboard = () => {
    return (
        <div>
            <div className='bg-emerald-700 text-3xl text-white w-10/12 p-16 rounded-xl my-10 mx-auto text-center'>
                <h1> <span className='text-5xl inline w-full flex justify-center'><SiCoursera/></span> <span>10 more exciting course is coming so stay with us.</span></h1>
            </div>
            <div className='w-10/12 md:grid grid-cols-2 gap-5 mx-auto'>
                <div className='bg-red-500 text-3xl text-white w-full  p-16 rounded-xl my-10 mx-auto text-center'>
                <span className='text-5xl inline w-full flex justify-center'><AiOutlineCode/> </span>Total course 8
                </div>
                <div className='bg-blue-500 text-3xl text-white w-full p-16 rounded-xl my-10 mx-auto text-center'>
                <span className='text-5xl inline w-full flex justify-center'><MdIntegrationInstructions/> </span>  Total instructor 107
                </div>

            </div>
        </div>
    );
};

export default Dashboard;