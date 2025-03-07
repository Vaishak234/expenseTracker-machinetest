import { Link, useLocation } from 'react-router-dom';
import {
    X,
    Wallet
} from 'lucide-react';
import { isActivePath, sidebarNavItems } from '../utils';

const Sidebar = ({ isOpen, setIsOpen }) => {
    const location = useLocation();


    return (
        <>
            <div
                className={`fixed inset-0  bg-gray-800/60 z-20 transition-opacity duration-200 ${isOpen ? 'opacity-100 lg:opacity-0 lg:pointer-events-none' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsOpen(false)}
            />

            <aside
                className={`fixed lg:static inset-y-0 left-0 z-30 w-64 transform transition-transform duration-200 bg-white py-2  border-r border-gray-200 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                    }`}
            >
                <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200  ">
                    <Link to="/" className="flex items-center space-x-2">
                        <Wallet className="w-8 h-8 text-indigo-600 " />
                        <span className="text-xl font-bold text-gray-800 ">Expense</span>
                    </Link>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 "
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-4 py-8    ">
                    <nav className="space-y-5">
                        {sidebarNavItems?.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${isActivePath(item.path)
                                    ? 'bg-indigo-50  text-indigo-600 '
                                    : 'text-gray-700  hover:bg-gray-100 '
                                    }`}
                            >
                                <item.icon className="w-5 h-5" />
                                <span>{item.label}</span>
                            </Link>
                        ))}
                    </nav>

                    {/* <div className="mt-8 pt-8 border-t border-gray-200 absolute botton-0 ">
                        <nav className="space-y-1">
                            <Link
                                to="/settings"
                                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700  hover:bg-gray-100 "
                            >
                                <Settings className="w-5 h-5" />
                                <span>Settings</span>
                            </Link>
                            <Link
                                to="/help"
                                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700  hover:bg-gray-100 "
                            >
                                <HelpCircle className="w-5 h-5" />
                                <span>Help & Support</span>
                            </Link>
                        </nav>
                    </div> */}
                </div>
            </aside>
        </>
    );
}

export default Sidebar;