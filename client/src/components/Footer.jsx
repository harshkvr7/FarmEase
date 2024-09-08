import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-zinc-900 text-white flex justify-between px-10 bottom-0 fixed w-screen h-10 items-center'>
      <div className="">
        @2025 FarmEase || All rights reserved
      </div>

      <div className="flex gap-3">
        <Link>Terms of service</Link>
        |
        <Link>Privacy Policy</Link>
        |
        <Link>Contact Us</Link>
      </div>
    </footer>
  )
}

export default Footer