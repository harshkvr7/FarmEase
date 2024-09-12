import React from 'react'

const ProduceCard = (props) => {
    return (
        <div className='grid p-2 gap-2 grid-rows-max bg-zinc-900 rounded-md hover:shadow-lg hover:-translate-y-3 transition-all'>
            <div className="flex justify-between items-center">
                <div className="bg-zinc-800 p-1 rounded-md font-bold">
                    {props.currentPrice}
                </div>
                <span className={("p-1 rounded-md font-bold bg-zinc-800 ") + (props.bidActive ? "text-green-600" : "text-red-600")}>{props.bidActive ? "Active" : "closed"}</span>
            </div>

            <img className='w-full rounded-md h-48 object-cover' src={props.img} />

            <div className="flex flex-col text-left">
                <div className="">
                    Crop Name: {props.name}
                </div>
                <div className="">
                    Qunatity: {props.quantity}
                </div>
                <div className="">
                    Base Price:{props.basePrice}
                </div>
            </div>

            <div className="flex justify-between">
                <div className="p-1 px-3 bg-green-700 rounded-md hover:bg-green-600 hover:cursor-pointer "> Bid  </div>
                <div className="p-1 bg-blue-700 rounded-md hover:bg-blue-500 hover:cursor-pointer">Read More</div>
            </div>
        </div>
    )
}

export default ProduceCard