import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../redux/Actions/loginAction';
import { getStorage } from '../localStorageHandler';

const Navbar = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [isOpenProfileDropdown, setIsOpenProfileDropdown] = useState(false);

    const logoutHandler = () => {
        dispatch(logoutAction());
        localStorage.clear();
        router.push('/');
    }
    return (
        <>
            <nav className="sticky top-0 z-30 relative flex flex-wrap items-center justify-between px-2 py-3 bg-emerald-500 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link href="/">
                            <a className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">Shopper</a>
                        </Link>
                        <button className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" onClick={() => setNavbarOpen(!navbarOpen)} >
                            <i className="fa-solid fa-bars"></i>
                            <i className="fa-solid fa-bars-progress"></i>
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link href="/products">
                                    <a className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75">
                                        <span className="ml-2">Products</span>
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about">
                                    <a className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75">
                                        <span className="ml-2">About</span>
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact">
                                    <a className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75">
                                        <span className="ml-2">Contact</span>
                                    </a>
                                </Link>
                            </li>
                            {
                                getStorage('userToken') ? <>
                                    <li className="nav-item">
                                        <Link href="/cart">
                                            <a className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75">
                                                <span className="ml-2">Cart</span>
                                            </a>
                                        </Link>
                                    </li>
                                    {/* <li className="nav-item relative cursor-pointer">
                                        <a onClick={() => setIsOpenProfileDropdown(!isOpenProfileDropdown)} className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75">
                                            <span className="ml-2">Hi, {getStorage('userName').split(" ")[0]}</span> <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </a>

                                        <div className={`${isOpenProfileDropdown ? "" : "hidden"} top-12 absolute z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}>
                                            <ul className="py-1">
                                                <li>
                                                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                                </li>
                                            </ul>
                                            <div onClick={() => logoutHandler()} className="py-1">
                                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</a>
                                            </div>
                                        </div>
                                    </li> */}
                                </> :
                                    <li className="nav-item">
                                        <Link href="/login">
                                            <a className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75">
                                                <span className="ml-2">Login</span>
                                            </a>
                                        </Link>
                                    </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;