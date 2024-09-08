import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='w-screen h-16 fixed items-center top-0 flex justify-between py-3 px-20 text-white bg-black bg-opacity-90 backdrop-blur-sm'>
            <div className="flex gap-5 items-center">
                <Link to={"/"}>
                    <div className="text-2xl pb-1 mr-4 font-semibold transition-all ">
                        FarmEase
                    </div>
                </Link>
                <Link to={"/marketplace"}>
                    <div className="hover:text-green-600 font-medium transition-all duration-300">
                        Marketplace
                    </div>
                </Link>
                <Link to={"/about"}>
                    <div className="hover:text-green-600 font-medium transition-all ">
                        Abouts us
                    </div>
                </Link>
                <Link to={"/contact"}>
                    <div className="hover:text-green-600 font-medium transition-all ">
                        Contact
                    </div>
                </Link>
                <Link to={"/contact"}>
                    <div className="hover:text-green-600 font-medium transition-all ">
                        Legal Support
                    </div>
                </Link>
            </div>
            <div className="">
                <Link to={"/dashboard"}>
                    <div className="div px-2 text-sm border border-green-700 py-1 bg-green-700 rounded-md flex items-center justify-center hover:bg-green-600 hover:border-green-500 transition-all duration-300">
                        Dashboard
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar