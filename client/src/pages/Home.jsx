import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='pt-16 bg-zinc-800 text-white h-screen'>
      <div className="flex flex-col w-full items-center pt-40 gap-8">
        <div className="text-center text-7xl">
        FarmEase<br />
          <span className="text-green-500 text-5xl">Tech with grace, harvest and embrace.</span>
        </div>

        <div className="text-center w-2/5 flex justify-center text-xl">
        A website dedicated to empowering farmers with contract farming solutions, legal support, and expert resources for secure, profitable agriculture
        </div> 

        <div className="flex justify-center gap-4">
          <Link to={"/dashboard"} className="px-5 py-2 rounded-md bg-green-600 hover:bg-green-500 transition-all">Dashboard</Link>
          <Link className="px-5 py-2 rounded-md bg-zinc-900 hover:bg-zinc-700 transition-all">Learn More ↗</Link>
        </div>
      </div>
    </div>
  )
}

export default Home