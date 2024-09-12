import React from 'react'

import SideBar from '../components/SideBar'

const Dashboard = () => {
    return (
        <div className='h-screen bg-zinc-800 text-white flex'>
            <SideBar />

            <div className="flex pt-16 flex-col w-full ">
                <div className="text-3xl font-semibold flex justify-center py-6 border-b w-full border-b-zinc-600">
                    Welcome, Rajesh Kumar
                </div>

                <div className="flex flex-col p-4 gap-3">
                    <div className="w-full flex gap-2">
                        <div className="flex-1 flex flex-col bg-zinc-900 border p-3 border-zinc-700 hover:shadow-lg transition-all shadow-white rounded-md">
                            <div className="font-semibold text-center text-lg mb-4">Current Market Prices</div>

                            <div className="grid grid-cols-2 auto-rows-max border rounded-md border-zinc-700 overflow-hidden">
                                <div className="text-center border-b border-r border-zinc-700 p-1">Wheat:</div>
                                <div className="text-center border-b border-zinc-700 p-1">₹2,100/quintal</div>

                                <div className="text-center border-b border-r border-zinc-700 p-1">Rice:</div>
                                <div className="text-center border-b border-r border-zinc-700 p-1">₹1,950/quintal</div>

                                <div className="text-center border-r border-zinc-700 p-1">Soybean:</div>
                                <div className="text-center p-1">₹4,200/quintal</div>
                            </div>

                        </div>
                        <div className="flex-1 flex flex-col bg-zinc-900 border p-3 border-zinc-700 hover:shadow-lg transition-all shadow-white rounded-md">
                            <div className="font-semibold text-lg mb-4">Weather Forecast</div>
                            <div className="mb-2">Today: 28°C</div>
                            <div className="mb-2">Tomorrow: 30°C</div>
                            <div className="">Day After: 29°C</div>
                        </div>
                        <div className="flex-1 flex flex-col bg-zinc-900 border p-3 border-zinc-700 hover:shadow-lg transition-all shadow-white rounded-md">
                            <div className="font-semibold text-lg mb-4">Active Contracts</div>
                            <div className="mb-2">Wheat - ABC Corp: In Progress</div>
                            <div className="mb-2">Rice - XYZ Foods: Pending</div>
                            <div className="self-end border border-green-700 hover:border-green-400 bg-green-700 text-white py-1 px-2 rounded-md hover:bg-green-600 hover:cursor-pointer">
                                View All Contracts
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col bg-zinc-900 border p-4 border-zinc-700 hover:shadow-xl transition-all shadow-white rounded-md">
                        <div className="font-semibold text-lg mb-4">
                            Recent Activities
                        </div>
                        <div className="mb-2">New contract offer received from DEF Agro</div>
                        <div className="mb-2">Payment of ₹50,000 received for Wheat delivery</div>
                        <div className="mb-2">Weather alert: Heavy rain expected next week</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard