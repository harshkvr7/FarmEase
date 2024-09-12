import React from 'react'

import img from "../assets/images.jpeg"
import { Link } from 'react-router-dom'

const Dashboard2 = () => {
    return (
        <div className='h-screen bg-zinc-800 text-white flex'>
            <div className="flex pt-24 flex-col gap-6 px-4  border-r-zinc-600 w-64 h-screen border-r">
                <div className="flex flex-col justify-center items-center font-medium">
                    <img className='rounded-full w-20' src={img} />
                    <div className="">Brajesh Kumar</div>
                    <div className="">Contractor ID: F12345</div>
                </div>

                <div className="flex flex-col items-start">
                    <Link to={"/dashboard/contracts"} className='py-2 px-2 hover:bg-zinc-700 w-full transition-all duration-300'>My Contracts</Link>
                    <Link className='py-2 px-2 hover:bg-zinc-700 w-full transition-all duration-300'>Messages</Link>
                    <Link className='py-2 px-2 hover:bg-zinc-700 w-full transition-all duration-300'>Grievances</Link>
                    <Link className='py-2 px-2 hover:bg-zinc-700 w-full transition-all duration-300'>My Biddings</Link>
                    <Link className='py-2 px-2 hover:bg-zinc-700 w-full transition-all duration-300'>Invoice</Link>
                    <Link className='py-2 px-2 hover:bg-zinc-700 w-full transition-all duration-300'>Legal Notices</Link>
                    <Link className='py-2 px-2 hover:bg-zinc-700 w-full transition-all duration-300'>Settings</Link>
                </div>
            </div>

            <div className="flex pt-16 flex-col w-full ">
                <div className="text-3xl font-semibold flex justify-center py-6 border-b w-full border-b-zinc-600">
                    Welcome, Rajesh Kumar
                </div>

                <div className="flex p-4 gap-3">
                    <div className="flex-1">

                        <div className="w-full flex flex-col gap-2">
                            <div className="flex-1 flex flex-col bg-zinc-900 border p-3 border-zinc-700 hover:shadow-lg transition-all shadow-white rounded-md">
                                <div className="font-semibold text-lg mb-4">Active Contract Details</div>

                                <div className="mb-2">Updates from farmer</div>
                                <div className="mb-2">Agreement details</div>
                                <div className="">Payment Timelines</div>
                                <div className="self-end border border-blue-700 hover:border-blue-400 bg-blue-700 text-white py-1 px-2 rounded-md hover:bg-blue-600 hover:cursor-pointer">
                                    View More
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col bg-zinc-900 border p-3 border-zinc-700 hover:shadow-lg transition-all shadow-white rounded-md">
                                <div className="font-semibold text-lg mb-4">Task To Do</div>
                                <div className="mb-2">Completion Checkbox</div>
                                <div className="mb-2">Upcoming Deadlines</div>
                                <div className="">Progress Indicator</div>
                                <div className="self-end border border-blue-700 hover:border-blue-400 bg-blue-700 text-white py-1 px-2 rounded-md hover:bg-blue-600 hover:cursor-pointer">
                                    Expand
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="w-full flex flex-col gap-2">
                            <div className="flex-1 flex flex-col bg-zinc-900 border p-3 border-zinc-700 hover:shadow-lg transition-all shadow-white rounded-md">
                                <div className="font-semibold text-lg mb-4">Active Contract Details</div>

                                <div className="mb-2">Updates from farmer</div>
                                <div className="mb-2">Agreement details</div>
                                <div className="">Payment Timelines</div>
                                <div className="self-end border border-blue-700 hover:border-blue-400 bg-blue-700 text-white py-1 px-2 rounded-md hover:bg-blue-600 hover:cursor-pointer">
                                    View More
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col bg-zinc-900 border p-3 border-zinc-700 hover:shadow-lg transition-all shadow-white rounded-md">
                                <div className="font-semibold text-lg mb-4">Task To Do</div>
                                <div className="mb-2">Completion Checkbox</div>
                                <div className="mb-2">Upcoming Deadlines</div>
                                <div className="">Progress Indicator</div>
                                <div className="self-end border border-blue-700 hover:border-blue-400 bg-blue-700 text-white py-1 px-2 rounded-md hover:bg-blue-600 hover:cursor-pointer">
                                    Expand
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 gap-4 flex flex-col h-fit bg-zinc-900 p-4 border border-zinc-700 hover:shadow-lg transition-all shadow-white rounded-md">
                        <span className='font-semibold text-lg'>Create Contract</span>
                        <img className='h-1/5 w-full object-cover' src='https://img.freepik.com/free-vector/business-man-shaking-hands-signed-contract_3446-646.jpg' />
                        <div className="flex gap-6 justify-center">
                            <div className="self-end border border-green-700 hover:border-green-400 bg-green-700 text-white py-1 px-2 rounded-md hover:bg-green-600 hover:cursor-pointer">Create New</div>
                            <div className="self-end border border-blue-700 hover:border-blue-400 bg-blue-700 text-white py-1 px-2 rounded-md hover:bg-blue-600 hover:cursor-pointer">Edit Contract</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard2