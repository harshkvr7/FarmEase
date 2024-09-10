import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='pt-16 bg-zinc-800 text-white min-h-screen flex flex-col items-center'>
      <div className="flex flex-col w-full items-center pt-40 gap-8 mb-28">
        <div className="text-center text-7xl">
        FarmEase<br />
          <span className="text-green-500 text-5xl">Tech with grace, harvest and embrace.</span>
        </div>

        <div className="text-center w-2/5 flex justify-center text-xl">
        A website dedicated to empowering farmers with contract farming solutions, legal support, and expert resources for secure, profitable agriculture
        </div> 

        <div className="flex justify-center gap-4">
          <Link to={"/dashboard"} className="px-5 py-2 border border-green-700 hover:border-green-400 rounded-md bg-green-700 hover:bg-green-600  transition-all">Dashboard</Link>
          <Link to={"/about"} className="px-5 py-2 rounded-md border border-zinc-900 hover:border-zinc-600 bg-zinc-900 hover:bg-zinc-700 transition-all">Learn More ↗</Link>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-2/5 gap-5 mb-28">
        <div className="flex text-4xl justify-center mb-8">Farm-Ease FAQ Section</div>
        <div className="bg-zinc-900 w-full p-4 rounded-lg flex justify-between items-center">What is Farm-Ease?
          <div className ="text-3xl">+</div>
        </div>
        <div className="bg-zinc-900 w-full p-4 rounded-lg flex justify-between items-center">How can Farm-Ease help my farm?
          <div className ="text-3xl">+</div>
        </div>
        <div className="bg-zinc-900 w-full p-4 rounded-lg flex justify-between items-center">Is Farm-Ease compatible with other software systems?
          <div className ="text-3xl">+</div>
        </div>
        <div className="bg-zinc-900 w-full p-4 rounded-lg flex justify-between items-center">How can I get started with Farm-Ease?
          <div className ="text-3xl">+</div>
        </div>
      </div>
    </div>
  )
}

export default Home