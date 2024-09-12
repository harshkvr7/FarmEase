import React, { useState } from 'react'

import SideBar from '../components/SideBar'

const ActiveContracts = () => {
    const orders = [
        { key: 1, id: 'A123', date: '2024-09-01', status: 'Pending', capital: 1000 , segment : 3},
        { key: 2, id: 'B456', date: '2024-09-02', status: 'Shipped', capital: 2000 , segment : 4},
        { key: 3, id: 'C789', date: '2024-09-03', status: 'Delivered', capital: 1500 , segment : 2},
        { key: 4, id: 'D012', date: '2024-09-04', status: 'Cancelled', capital: 500 , segment : 5},
        { key: 5, id: 'E345', date: '2024-09-05', status: 'Pending', capital: 1200 , segment : 2},
        { key: 6, id: 'F678', date: '2024-09-06', status: 'Shipped', capital: 1800 , segment : 1},
        { key: 7, id: 'G901', date: '2024-09-07', status: 'Delivered', capital: 2500 , segment : 3},
        { key: 8, id: 'H234', date: '2024-09-08', status: 'Pending', capital: 1100 , segment : 5}
    ];

    const [focusedOrder, setFocusedOrder] = useState(0);
    
    return (
        <div className='h-screen bg-zinc-800 text-white flex'>
            <SideBar />
            <div className="flex pt-16 flex-col w-full ">
                <div className="text-3xl font-semibold flex justify-center py-6 border-b w-full border-b-zinc-600">
                    Active Contracts
                </div>
                <div className="flex p-6 gap-8">
                    <div className="w-2/5">
                        <span className='text-2xl'>Order Summary</span>
                        <div className="grid grid-cols-1 mt-3 gap-3 grid-rows-max ">
                            <div className="flex gap-4">
                                <div className=" flex-1 text-lg">No.</div>
                                <div className=" flex-1 text-lg">Order Number</div>
                                <div className=" flex-1 text-lg">Order Date</div>
                                <div className=" flex-1 text-lg">Status</div>
                                <div className=" flex-1 text-lg">Amount</div>
                            </div>
                            {orders.map((order, index) => (
                                <div key={index} onClick={()=>setFocusedOrder(index)} className="flex gap-4 p-2 bg-zinc-900 rounded-md hover:bg-zinc-700 hover:cursor-pointer">
                                    <div className="flex-1">{order.key}</div>
                                    <div className="flex-1">{order.id}</div>
                                    <div className="flex-1">{order.date}</div>
                                    <div className={"flex-1 text-center rounded-lg p-1 " + (order.status == "Pending" ? "bg-yellow-100 text-yellow-800" : order.status == "Shipped" ? "bg-green-200 text-green-900" : order.status == "Cancelled" ? "bg-red-200 text-red-900" : order.status == "Delivered" ? "bg-green-700" : "")}>{order.status}</div>
                                    <div className="flex-1">{order.capital}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 w-96">
                        <span className='text-2xl flex justify-between pr-4 items-center'>Status <span className='text-lg hover:bg-blue-500 hover:cursor-pointer p-1 bg-blue-700 rounded-lg'>Update</span></span>

                        <div className="flex items-center justify-between bg-zinc-900 p-2 rounded-lg">
                            <div className="text-xl flex flex-col">Segment 1 <span className='text-sm'>Sowing of seeds</span></div>
                            <div className={"p-1 h-fit w-28 text-center rounded-xl " + (orders[focusedOrder].segment >= 1 ? "bg-green-700" : "bg-red-400")}>{orders[focusedOrder].segment >= 1 ? "Completed" : "Pending"}</div>
                        </div>
                        <div className="flex items-center justify-between bg-zinc-900 p-2 rounded-lg">
                            <div className="text-xl flex flex-col">Segment 2 <span className='text-sm'>Fertilizers</span></div>
                            <div className={"p-1 h-fit w-28 text-center rounded-xl " + (orders[focusedOrder].segment >= 2 ? "bg-green-700" : "bg-red-400")}>{orders[focusedOrder].segment >= 2 ? "Completed" : "Pending"}</div>
                        </div>
                        <div className="flex items-center justify-between bg-zinc-900 p-2 rounded-lg">
                            <div className="text-xl flex flex-col">Segment 3 <span className='text-sm'>Weed Cutting</span></div>
                            <div className={"p-1 h-fit w-28 text-center rounded-xl " + (orders[focusedOrder].segment >= 3 ? "bg-green-700" : "bg-red-400")}>{orders[focusedOrder].segment >= 3 ? "Completed" : "Pending"}</div>
                        </div>
                        <div className="flex items-center justify-between bg-zinc-900 p-2 rounded-lg">
                            <div className="text-xl flex flex-col">Segment 4 <span className='text-sm'>Mid-Harvesting</span></div>
                            <div className={"p-1 h-fit w-28 text-center rounded-xl " + (orders[focusedOrder].segment >= 4 ? "bg-green-700" : "bg-red-400")}>{orders[focusedOrder].segment >= 4 ? "Completed" : "Pending"}</div>
                        </div>
                        <div className="flex items-center justify-between bg-zinc-900 p-2 rounded-lg">
                            <div className="text-xl flex flex-col">Segment 5 <span className='text-sm'>Final-Harvesting</span></div>
                            <div className={"p-1 h-fit w-28 text-center rounded-xl " + (orders[focusedOrder].segment >= 5 ? "bg-green-700" : "bg-red-400")}>{orders[focusedOrder].segment >= 5 ? "Completed" : "Pending"}</div>
                        </div>
                    </div>

                    <div className="">
                        Statistics
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActiveContracts