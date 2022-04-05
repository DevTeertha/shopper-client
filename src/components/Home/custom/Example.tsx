import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserDetailsAction,
  logoutAction
} from "../../../redux/Actions/loginAction";
import { getStorage } from "../../localStorageHandler";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Products", href: "#", current: false },
  { name: "About", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Example: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isOpenProfileDropdown, setIsOpenProfileDropdown] = useState(false);

  const userDetails = useSelector((state: any) => state.userDetails);
  const cart = useSelector((state: any) => state.cart);

  const logoutHandler = () => {
    dispatch(logoutAction());
    localStorage.clear();
    router.push("/");
  };

  useEffect(() => {
    if (getStorage("userToken")) {
      const apiKey = getStorage("userToken");
      dispatch(getUserDetailsAction(apiKey));
    }
  }, [getStorage("userToken")]);
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="container mx-auto px-2 sm:px-6 lg:px-4">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <a className="leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                      <span className="text-emerald-500 text-lg font-bold">
                        Shop
                      </span>
                      <span className="text-gray-700 text-lg font-bold">
                        per
                      </span>
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex h-full items-center space-x-4">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a className="px-3 py-2 flex items-center text-sm font-semibold uppercase leading-snug hover:opacity-75">
                          <span className="ml-2 text-gray-700">
                            {item.name}
                          </span>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {getStorage("userToken") ? (
                  <>
                    <div className="nav-item relative">
                      <Link href="/cart">
                        <a className="px-3 py-2 flex items-center text-sm font-semibold uppercase leading-snug hover:opacity-75">
                          <i className="text-gray-700 fa-solid text-base fa-cart-shopping"></i>
                        </a>
                      </Link>
                      {cart.totalItems > 0 && (
                        <div className="cart_item_count bg-red-500 p-0">
                          {cart.totalItems}
                        </div>
                      )}
                    </div>
                    <div className="nav-item relative cursor-pointer">
                      <a
                        onClick={() =>
                          setIsOpenProfileDropdown(!isOpenProfileDropdown)
                        }
                        className="px-3 py-2 flex items-center text-sm font-semibold leading-snu hover:opacity-75"
                      >
                        <i className="text-gray-700 fa-regular text-base fa-user"></i>
                      </a>

                      <div
                        className={`${isOpenProfileDropdown ? "" : "hidden"
                          } top-12 right_70pxNeg absolute z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
                      >
                        <h6 className="text-center">
                          Hi,
                          {userDetails.user.user.name
                            ? userDetails.user.user.name.split(" ")[0]
                            : userDetails.user.user.email.split("@")[0]}{" "}
                        </h6>
                        <div className="py-1">
                          <div>
                            <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200">
                              Profile
                            </a>
                          </div>
                          <div>
                            <Link href="/order-list">
                              <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200">
                                Order List
                              </a>
                            </Link>
                          </div>
                          <div>
                            <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200">
                              Dashboard
                            </a>
                          </div>
                        </div>
                        <div onClick={() => logoutHandler()} className="py-1">
                          <a className="block py-2 px-4 font-semibold text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200">
                            Logout
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="nav-item">
                    <Link href="/login">
                      <a className="px-3 py-2 flex items-center text-sm font-semibold uppercase leading-snug hover:opacity-75">
                        <span className="ml-2">Login</span>
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Example;
