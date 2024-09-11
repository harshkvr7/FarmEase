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

      <div className="flex my-28 gap-8 w-3/5">
        <div className="flex-1 flex flex-col gap-6 justify-around">
          <div className="text-5xl flex flex-col gap-2">
            <span className='text-base'>Place Bid on contracts</span>
            Connecting Farmers with Contractors
          </div>
          <div className="bg-zinc-900 p-4 text-xl rounded-md hover:shadow-xl shadow-zinc-900 transition-all">Place Bid on contracts</div>
          <div className="bg-zinc-900 p-4 text-xl rounded-md hover:shadow-xl shadow-zinc-900 transition-all">Legal Support for any inconvineance</div>
          <div className="bg-zinc-900 p-4 text-xl rounded-md hover:shadow-xl shadow-zinc-900 transition-all">Chat function for negotiation</div>
        </div>

        <img className='flex-1 w-1/2 rounded-xl shadow-xl shadow-zinc-900' src='https://farm-ease.stunning.so/_next/image/?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1535379453347-1ffd615e2e08%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DM3w0OTM4MDh8MHwxfHNlYXJjaHw2fHxBZ3JpY3VsdHVyZSUyME1hcmtldHBsYWNlJTIwUGxhdGZvcm0lMjBsYXlvdXR8ZW58MHwwfHx8MTcyNTg5MjAyOXww%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=640&q=75' />
      </div>

      <div className="flex flex-col justify-center items-center w-2/5 gap-5 mt-32 mb-28">
        <div className="flex text-4xl justify-center mb-8">Farm-Ease FAQ Section</div>
        <div className="bg-zinc-900 w-full p-4 rounded-lg flex justify-between items-center">What is Farm-Ease?
          <div className="text-3xl">+</div>
        </div>
        <div className="bg-zinc-900 w-full p-4 rounded-lg flex justify-between items-center">How can Farm-Ease help my farm?
          <div className="text-3xl">+</div>
        </div>
        <div className="bg-zinc-900 w-full p-4 rounded-lg flex justify-between items-center">Is Farm-Ease compatible with other software systems?
          <div className="text-3xl">+</div>
        </div>
        <div className="bg-zinc-900 w-full p-4 rounded-lg flex justify-between items-center">How can I get started with Farm-Ease?
          <div className="text-3xl">+</div>
        </div>
      </div>
    </div>
  )
}

export default Home