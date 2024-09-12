import React from 'react'
import { Link } from 'react-router-dom'

import linkedInIcon from "../assets/linkedin.svg"
import instagramIcon from "../assets/instagram.svg"
import facebookIcon from "../assets/facebook.svg"
import twitterIcon from "../assets/twitter.svg"
import youtubeIcon from "../assets/youtube.svg"

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
                <Link to={"/contracts"}>
                    <div className="hover:text-green-600 font-medium transition-all duration-300">
                        Contracts
                    </div>
                </Link>
                <Link to={"/about"}>
                    <div className="hover:text-green-600 font-medium transition-all ">
                        About Us
                    </div>
                </Link>
                <Link to={"/contact"}>
                    <div className="hover:text-green-600 font-medium transition-all ">
                        Contact
                    </div>
                </Link>
                <Link to={"/Support"}>
                    <div className="hover:text-green-600 font-medium transition-all ">
                        Support
                    </div>
                </Link>
                <Link to={"/Dashboard2"}>
                    <div className="hover:text-green-600 font-medium transition-all ">
                        Dashboard-2
                    </div>
                </Link>
            </div>
            <div className="flex gap-5 items-center">
                <img src={linkedInIcon} className='h-4' />
                <img src={instagramIcon} className='h-4'/>
                <img src={facebookIcon} className='h-4'/>
                <img src={twitterIcon} className='h-4'/>
                <img src={youtubeIcon} className='h-4'/>
                <Link to={"/dashboard"}>
                    <div className="div px-2 text-sm border border-green-700 py-1 bg-green-700 rounded-md flex items-center justify-center hover:bg-green-600 hover:border-green-500 transition-all duration-300 ml-6">
                        Dashboard
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar