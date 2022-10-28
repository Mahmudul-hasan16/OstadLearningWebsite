import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Iot = () => {
    const coursesData = useLoaderData()
    const courses = coursesData.filter(data => data.category ==='Iot')
    return (
        <div>
             <div>
            <div id='slider' className='flex flex-col -z-50 gap-5 justify-center items-center md:grid md:grid-cols-3  h-full w-full mx-auto'>
		
		{
			courses.map(course => {
				return (
					
					<div key={course.id} className='dark:text-white'>
						<div  className="card border-teal-400 border-2 w-80 h-full bg-base-100 shadow-xl">
  <figure><img src={course.img} className="w-full h-48" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{course.name}</h2>
    <p>{(course.details).length >30 ? (course.details).slice(0,30)+'....read more' : course.details  }</p>
    <div className="card-actions justify-end">
    <Link className='w-full' to={`/courses/${course.id}`}><button  className="btn bg-teal-700 w-full text-white border-0 ">Details</button></Link>
    </div>
  </div>
					</div>
					</div>
					
				)
			})
		}
		</div>
    
        </div>
        </div>
    );
};

export default Iot;