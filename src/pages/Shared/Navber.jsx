import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const Navber = () => {

    const { user , signOutUser} = use(AuthContext);

    const handleSignOut = () => {
            signOutUser()
            .then(()=>{
                console.log("sign out user")
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {/* for applicant links. check roles as well */}
        {
            user && <>
            <li><NavLink to='/myApplication'>My Application</NavLink></li>
            </>
        }

        {/* for recruiter. check roles as well */}
        {
            user && <>
            <li><NavLink to='/addJob'>Add Job</NavLink></li>
            <li><NavLink to='/myPostedJobs'>My Posted Jobs</NavLink></li>
            </>
        }
    </>

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <button onClick={handleSignOut} className='btn bg-blue-500 text-white'>Sign Out</button> : <>
                            <NavLink className="btn" to='/register'>Register</NavLink>
                            <NavLink className="btn bg-sky-300" to='/signIn'>Sign In</NavLink>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navber;