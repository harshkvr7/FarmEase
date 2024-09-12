import React from 'react'

const ContractCard = (props) => {
    return (
        <div className="grid grid-rows-max bg-zinc-900 rounded-md p-3">
            <div className="flex justify-around gap-4 mb-4">
                <div className="flex-1 text-xl font-bold">{props.contractor}</div>
                <div className="flex-1 flex h-fit p-1 rounded-md text-lg justify-center items-center text-center bg-zinc-800">{props.cropName}</div>
                <div className="flex-1 flex h-fit p-1 rounded-md text-lg justify-center items-center text-center bg-zinc-800">{props.duration}</div>
                <div className="flex-1 flex h-fit p-1 rounded-md text-lg justify-center items-center text-center bg-zinc-800">{props.capital}</div>
            </div>

            <div className="flex gap-8 border-t pt-4 border-t-zinc-500">
                <div className="w-1/4 flex">
                    <img src={props.img} className='w-full h-32 rounded-md object-cover' alt="" />
                </div>
                <div className="flex w-3/4 text-left flex-col">
                    <div className="text-xl mb-6">{props.desc}</div>
                    <div className=""><span className='font-bold underline'>Contract Duration:</span> {props.duration}</div>
                    <div className=""><span className='font-bold underline'>Crop:</span> {props.cropName}</div>
                    <div className=""><span className='font-bold underline'>Payment:</span> {props.capital}</div>
                    <div className=""><span className='font-bold underline'>Scope of Work:</span> {props.work}</div>
                    <div className="p-2 bg-green-700 w-fit self-end rounded-md hover:bg-green-600 hover:cursor-pointer">View More</div>
                </div>
            </div>
        </div>
    )
}

export default ContractCard