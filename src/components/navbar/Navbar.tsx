import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../redux/Actions/loginAction';
import { getStorage, removeStorage } from '../localStorageHandler';

const Navbar = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [loginData, setLoginData] = useState({
        name: "",
        email: ""
    });
    const logoutHandler = () => {
        dispatch(logoutAction());
        localStorage.clear();
        router.push('/');
    }
    useEffect(()=>{
        setLoginData({
            name: getStorage('name'),
            email: getStorage('email')
        })
    },[getStorage('email')])
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-emerald-500 mb-3">
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
                                <Link href="/cart">
                                    <a className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75">
                                        <span className="ml-2">Cart</span>
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about">
                                    <a className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75">
                                        <span className="ml-2">Products</span>
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
                                loginData.email ? <>
                                    <li className="nav-item cursor-pointer">
                                        <a className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75">
                                            <span className="ml-2">{loginData.name}</span>
                                        </a>
                                    </li>
                                    <li onClick={()=>logoutHandler()} className="nav-item cursor-pointer">
                                        <a className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75">
                                            <span className="ml-2">Logout</span>
                                        </a>
                                    </li>
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