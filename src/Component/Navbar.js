import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
    // State to control the visibility of the menu on smaller screens
    const [showMenu, setShowMenu] = useState(false);

    // Function to toggle the visibility of the menu
    const toggleShowMenu = () => {
        setShowMenu((prev) => !prev);
    };

    // Navigation links data
    const navLinks = [
        { to: '/', text: 'Home' },
        { to: '/detailspage', text: 'Your Habits' },
    ];

    return (
        <div className="w-screen h-screen overflow-auto flex flex-col flex-nowrap">
            <div className="w-full m-0 flex h-14 text-black text-lg font-semibold justify-center items-center shadow-lg z-10 shrink-0">
                <div className="w-[95%] sm:w-[85%] h-full flex justify-between items-center flex-wrap">
                    {/* Habit tracker logo */}
                    <div className="w-fit h-full flex items-center p-1 overflow-hidden">
                        <NavLink to="/">
                            <img src={require('../Assets/logo.png')} alt="logo" className="w-24 mt-2" />
                        </NavLink>
                    </div>

                    {/* Navigation links (hidden on smaller screens) */}
                    <div className="hidden w-fit h-full sm:flex items-center">
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.to} className="inline-block mx-2 text-slate-400">
                                    <NavLink
                                        style={({ isActive }) => (isActive ? { color: "rgb(129 140 248)" } : undefined)}
                                        to={link.to}
                                    >
                                        {link.text}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Menu icon (hidden on medium screens and above) */}
                    <button className="sm:hidden" onClick={toggleShowMenu}>
                        <img src={require('../Assets/menu.png')} alt="menu-icon" className="w-[25px] h-[25px]" />
                    </button>

                    {/* Menu for smaller screens */}
                    {showMenu && (
                        <div className="block sm:hidden w-full h-fit bg-white p-1 rounded-b shadow-md border-x-2 border-b-2">
                            <ul className="mx-0 px-1">
                                {navLinks.map((link) => (
                                    <li key={link.to} className="border-b p-1 text-slate-400" onClick={toggleShowMenu}>
                                        <NavLink
                                            style={({ isActive }) => (isActive ? { color: "rgb(129 140 248)" } : undefined)}
                                            to={link.to}
                                        >
                                            {link.text}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Render the children route pages */}
            <Outlet />
        </div>
    );
};

export default Navbar;
