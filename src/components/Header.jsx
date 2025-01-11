import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = (props) => {
    const linkClass = ({ isActive }) => {
        return (
            "px-3 py-1.5 rounded-full font-semibold transition-all duration-200 hover:bg-rose-600 " +
            (isActive ? " bg-rose-600 " : " bg-rose-900 ")
        );
    };
    return (
        <div className="sticky top-0 z-40 flex h-fit w-full min-w-full items-center justify-between bg-zinc-900 p-4 text-white">
            <Link to="/" className="flex items-center gap-4">
                <h1 className="text-xl font-semibold sm:text-4xl">
                    Kinoschurke
                </h1>
            </Link>
            <div className="flex gap-1.5 text-sm">
                <NavLink to="/date" className={linkClass}>
                    Datum
                </NavLink>
                <NavLink to="/room" className={linkClass}>
                    Saal
                </NavLink>
                <NavLink to="/movie" className={linkClass}>
                    Film
                </NavLink>
            </div>
        </div>
    );
};

export default Header;
