// Header.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="shadow sticky z-10 top-0 photoo border-b-2">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="http://localhost:5173/src/components/Images/Newlogominiproject.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2 space-x-2 lg:space-x-8 flex-wrap">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 mb-2 lg:mb-0 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 mb-2 lg:mb-0 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          <div
            className="lg:flex lg:items-center lg:w-auto lg:order-1 flex-wrap"
            id="mobile-menu-2"
          >
            <ul className="flex flex-wrap mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700' : 'text text-gray-700'}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-1`
                }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/medicines"
                  className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700' : 'text text-gray-700'}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-1`
                }
                >
                  Medicines
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/alertpage"
                  className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700' : 'text text-gray-700'}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-1`
                }
                >
                  Alerts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                 className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700' : 'text text-gray-700'}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-1`
                }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700' : 'text text-gray-700'}  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-1`
                }
                >
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;