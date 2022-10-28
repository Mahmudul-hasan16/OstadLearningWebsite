import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ProfileContext } from '../../context/UserContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // this will render category 
  const [category, setCategory] = useState([])
  useEffect(() => {
    fetch('https://server-ostad-mahmudul-hasan16.vercel.app/category')
      .then(res => res.json())
      .then(data => setCategory(data))
  }, [])

  // active is create to show active navbar
  const activeStyle = {

    padding: "5px",
    borderRadius: "5px",
    borderBottom: "2px solid #00796B"
  };
  const { logOut, user } = useContext(ProfileContext)
  const handleLogOut = () => {
    logOut()
      .then(() => {

      })
      .catch(error => console.log(error));
  }

  return (
    <div className="light:bg-white dark:bg-gray-900 md:relative sticky  z-50 light:text-gray-900">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
              </svg>
            </span>
            <span className='uppercase text-3xl font-bold p-2'>
              Ostad
              <span className='text-teal-700'> LER</span>
            </span>

          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                aria-label="Product pricing"
                title="Product pricing"
                className="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                aria-label="About us"
                title="About us"
                className="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                aria-label="About us"
                title="About us"
                className="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                About
              </NavLink>
            </li>

          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            {/* this section will add user profile picture */}
            {
              user ?
                <img alt="" title={user?.email} className="w-10 h-10 rounded-full ring-2 ring-offset-4  ring-teal-400 ring-offset-gray-800" src={user?.photoURL === null ? "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1666775465~exp=1666776065~hmac=52d3d334805b06451346430374e0d14f56359098935ada58c67bce030d779713" : user?.photoURL} />
                :
                <div></div>
            }
            {/* this section will check if our user is log in or not */}
            {
              user ?
                <>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-m focus:shadow-outline focus:outline-none"
                      aria-label="Sign out"
                      title="Sign out"
                    >
                      LogOut
                    </button>

                  </li>
                </>
                :
                <>
                  <li>
                    <Link
                      to="/login"
                      className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-teal-500 bg-teal-700 focus:shadow-outline focus:outline-none"
                      aria-label="Sign up"
                      title="Sign up"
                    >
                      LogIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-teal-500 bg-teal-700 focus:shadow-outline focus:outline-none"
                      aria-label="Sign up"
                      title="Sign up"
                    >
                      Register
                    </Link>
                  </li>
                </>
            }
          </ul>
          {/* this is mobile and tab respomsive section  */}
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
                          </svg>
                        </span>
                        <span className='uppercase text-3xl font-bold p-2'>
                          Ostad
                          <span className='text-teal-700'> LER</span>
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <NavLink
                          to="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                          }
                          end>
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/courses"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                          }
                        >
                          Courses
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/faq"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                          }
                        >
                          FAQ
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/blog"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                          }
                        >
                          Blog
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/about"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                          }
                        >
                          About
                        </NavLink>
                      </li>
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
                            return (

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
                      <li>
                        {
                          user ?
                            <>
                              <div>
                                <p>{user.email}</p>
                              </div>
                              <button
                                onClick={handleLogOut}
                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide w-full text-black transition duration-200 rounded shadow-m focus:shadow-outline focus:outline-none"
                                aria-label="Sign out"
                                title="Sign out"
                              >
                                LogOut
                              </button>
                            </>
                            :
                            <>
                              <Link
                                to="/login"
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-700 mb-2 md:m-0 hover:bg-teal-500 focus:shadow-outline focus:outline-none"
                                aria-label="Sign up"
                                title="Sign up"
                              >
                                LogIn
                              </Link>
                              <Link
                                to="/register"
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-700 hover:bg-teal-500 focus:shadow-outline focus:outline-none"
                                aria-label="Sign up"
                                title="Sign up"
                              >
                                Register
                              </Link>
                            </>
                        }
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;