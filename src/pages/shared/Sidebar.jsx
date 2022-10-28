import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { MdCategory } from 'react-icons/md';
import { NavLink } from 'react-router-dom';


const Sidebar = ({category}) => {
  
    const activeStyle = {
		background: '#00796B',
		padding: "5px",
		borderRadius: "5px",
    color:'#ffffff'
	  };
    return (
        <div className='p-10 bg-white h-screen sticky top-0 hidden md:block'>
            <ul className="space-y-4 ">
                      
                      <li>
                        <NavLink
                          to="/courses"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
						  style={({ isActive }) =>
						  isActive ? activeStyle : undefined
						}
						end>
                          All
                        </NavLink>
                      </li>
                      {
                        category.map(categoryData => {
                          return(
                            
                            <li key={categoryData.id}>
                        <NavLink
                          to={categoryData.category}
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
						  style={({ isActive }) =>
						  isActive ? activeStyle : undefined
						}
						>
                          {categoryData.category}
                        </NavLink>
                      </li>
                            
                          )
                        })
                      }
                      
                      <li>
                        <NavLink
                          to="dashboard"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
						  style={({ isActive }) =>
						  isActive ? activeStyle : undefined
						}
						>
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="checkout"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
						  style={({ isActive }) =>
						  isActive ? activeStyle : undefined
						}
						>
                          Get premium access
                        </NavLink>
                      </li>
                      
                      
                      
                    </ul>
        </div>
    );
};

export default Sidebar;