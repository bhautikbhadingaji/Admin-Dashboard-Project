import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink, useNavigate } from 'react-router-dom'
import { LuUsers } from "react-icons/lu";
import { BiLogIn } from "react-icons/bi";
import toast from 'react-hot-toast';
import { HiMoon, HiSun } from "react-icons/hi";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContex';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const Dashboard = ({ title = "Dashboard" }) => {

    const { toggleTheme, theme } = useContext(ThemeContext);

    const navigate = useNavigate();

    const isLoggedIn = localStorage.getItem("user");

    const handleLogout = () => {
        localStorage.removeItem("user");
        toast.success("Logged out successfully");
        navigate("/login");
    };

    return (
        <>

            <div className="min-h-full">
                <Disclosure as="nav" className="dark:bg-gray-800 bg-white ">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <div className="shrink-0">
                                    <img
                                        alt="Your Company"
                                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                        className="size-8"
                                    />
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4 dark:text-white text-black  text-bold dark:border-black">
                                        <NavLink to={"/user-management"} className="flex gap-1 hover:underline">
                                            <LuUsers className='mt-1' />
                                            User Management
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-4 flex items-center md:ml-6">
                                    <button
                                        type="button"
                                        className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                                    >
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon aria-hidden="true" className="size-6" />
                                    </button>
                                    {isLoggedIn ? <NavLink
                                        onClick={() => handleLogout()}
                                        to={"/login"}
                                        className='text-blck bg-red-400 box-border border border-transparent hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-semibold leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none cursor-pointer flex items-center'>
                                        Logout <BiLogIn className='mt-1' />
                                    </NavLink> : <NavLink
                                        to={"/login"}
                                        className='text-blck bg-green-400 box-border border border-transparent hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-semibold leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none cursor-pointer flex items-center'>
                                        Login <BiLogIn className='mt-1' />
                                    </NavLink>}

                                    <div className="hidden md:flex items-center space-x-4">
                                        <button
                                            onClick={toggleTheme}
                                            className=" flex  p-2 rounded-full bg-gray-700 text-yellow-400 hover:bg-gray-600 transition"
                                        >
                                           {theme === "light" ? <HiMoon size={20} /> : <HiSun size={20} />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                {/* Mobile menu button */}
                                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                                    <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                                </DisclosureButton>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="md:hidden">
                        <div className="border-t border-white/10 pt-4 pb-3">
                            <div className="flex items-center px-5">
                                <button
                                    type="button"
                                    className="relative ml-auto shrink-0 rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon aria-hidden="true" className="size-6" />
                                </button>
                            </div>
                            <div className="mt-3 space-y-1 px-2">
                            </div>
                        </div>
                    </DisclosurePanel>
                </Disclosure>
                <main>
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
                </main>
            </div>

        </>
    )
}