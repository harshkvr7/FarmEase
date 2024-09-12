import React from 'react'

import img from "../assets/images.jpeg"
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className="flex pt-24 flex-col gap-6 px-4  border-r-zinc-600 w-52 h-screen border-r">
            <div className="flex flex-col justify-center items-center font-medium">
                <img className='rounded-full w-20' src={img} />
                <div className="">Rajesh Kumar</div>
                <div className="">Farmer ID: F12345</div>
            </div>

            <div className="flex flex-col items-start">
                <Link to={"/dashboard/contracts"} className='py-2 px-2 hover:bg-zinc-700 w-full transition-all duration-300'>My Contracts</Link>
                <Link className='py-2 px-2 hover:bg-zinc-700 w-full transition-all duration-300'>Messages</Link>
                <Link className='py-2 px-2 hover:bg-zinc-700 w-full transition-all duration-300'>Grievances</Link>
                <Link className='py-2 px-2 hover:bg-zinc-700 w-full transition-all duration-300'>Settings</Link>
            </div>
        </div>
    )
}

export default SideBar