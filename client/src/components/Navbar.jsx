import { Menu, Moon, Sun } from 'lucide-react'
import React from 'react'

const Navbar = ({ setIsOpen }) => {

    const isDarkmode = true

    return (
        <header>
            <nav className="bg-white  border-b border-gray-200 ">
                <div className="px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <button
                                onClick={() => setIsOpen((prev) => !prev)}
                                className="p-2 rounded-lg text-gray-600  hover:bg-gray-100  focus:outline-none"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex items-center space-x-6">


                            <button
                                className="p-2 rounded-lg text-gray-600  hover:bg-gray-100 "
                            >
                                {isDarkmode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                            </button>

                            <div className="flex items-center space-x-3">
                                <img
                                    className="w-8 h-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="User profile"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
