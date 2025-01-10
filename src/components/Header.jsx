import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = (props) => {





    const linkClass = ({ isActive }) => {
        return 'px-3 py-1.5 rounded-full font-semibold hover:bg-violet-700 transition-all duration-200 ' + (isActive ? ' bg-violet-700' : ' bg-violet-600 ')
    }
    return (
        <div className='w-full sticky top-0  min-w-full h-fit flex justify-between items-center p-4 bg-slate-900 text-white z-40'>
            
            <Link to='/' className='flex items-center gap-4'>
                <h1 className='text-xl font-semibold '>Kinoschurke</h1>
            </Link>
            <div className='flex gap-1.5 text-sm'>
                <NavLink
                    to='/date'
                    className={linkClass}
                >
                    Date
                </NavLink>
                <NavLink
                    to='/room'
                    className={linkClass}
                >
                    Room
                </NavLink>
                <NavLink
                    to='/movie'
                    className={linkClass}
                >
                    Movie
                </NavLink>
            </div>


        </div>
    )
}

export default Header