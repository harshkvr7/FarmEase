import React from 'react'

const ProduceCard = (props) => {
  return (
    <div className='flex flex-col bg-zinc-700 rounded-md'>
        <img src={props.img}/>
        <div className="">
            {props.name}
        </div>
        <div className="">
            {props.quantity}
        </div>
        <div className="">
            {props.basePrice}
        </div>
        <div className="">
            {props.currentPrice}
        </div>
        {props.bidActive ? "Active" : "closed"}
    </div>
  )
}

export default ProduceCard