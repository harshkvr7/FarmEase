import React from 'react'

import searchIcon from "../assets/search.svg"
import chevron from "../assets/chevron-down.svg"
import produceList from './produceList'
import ProduceCard from '../components/ProduceCard'

const Marketplace = () => {
  return (
    <div className='pt-28 px-56 text-center text-white bg-zinc-800 pb-32'>
      <span className='text-4xl'>FarmEase Marketplace</span>

      <div className="flex justify-between gap-8">
        <div className="w-1/5 flex flex-col gap-3 h-fit rounded-md p-3 bg-zinc-700 text-left">
          <span className='text-lg mb-3'>Filters</span>

          <div className="flex flex-col gap-1 mb-2">
            <span className='text-xs mb-1'>CATEGORIES</span>

            <div class="flex items-center">
              <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
              <label for="default-radio-1" class="ms-2 text-sm font-medium dark:text-gray-300">Grains</label>
            </div>
            <div class="flex items-center">
              <input id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
              <label for="default-radio-2" class="ms-2 text-sm font-medium dark:text-gray-300">Fruits</label>
            </div>
            <div class="flex items-center">
              <input id="default-radio-3" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
              <label for="default-radio-3" class="ms-2 text-sm font-medium dark:text-gray-300">Vegetables</label>
            </div>
          </div>

          <div className="flex flex-col gap-1 mb-2">
            <span className='text-xs mb-1'>BID STATUS</span>

            <div class="flex items-center">
              <input id="default-radio-4" type="radio" value="" name="default-radio-2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
              <label for="default-radio-4" class="ms-2 text-sm font-medium dark:text-gray-300">Active</label>
            </div>
            <div class="flex items-center">
              <input id="default-radio-5" type="radio" value="" name="default-radio-2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
              <label for="default-radio-5" class="ms-2 text-sm font-medium dark:text-gray-300">Closed</label>
            </div>
          </div>
          <div className="">
            <span className='text-xs mb-1'>PRICE</span>

            <div class="relative mb-6">
              <label for="labels-range-input" class="sr-only">Labels range</label>
              <input id="labels-range-input" type="range" value="1000000" min="0" max="2500000" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
              <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">0</span>
              <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">2500000</span>
            </div>

          </div>

          <div className="flex justify-between hover:cursor-pointer hover:bg-zinc-600 p-2 rounded-md transition-all">
            Location / State
            <img className='w-5' src={chevron} />
          </div>


          <div className="flex justify-between hover:cursor-pointer hover:bg-zinc-600 p-2 rounded-md transition-all">
            Quantity
            <img className='w-5' src={chevron} />
          </div>

          <div className="flex justify-between hover:cursor-pointer hover:bg-zinc-600 p-2 rounded-md transition-all">
            Vendor Ratings
            <img className='w-5' src={chevron} />
          </div>
        </div>

        <div className="w-4/5 flex flex-col mt-10">
          <div className="flex justify-between">
            <div className="flex bg-zinc-700 pl-3 rounded-md">
              <img className='w-6' src={searchIcon} />
              <input type="text" className='bg-zinc-700 p-3 rounded-md' placeholder='Search' />
            </div>

            <div className="p-3 flex gap-6 bg-zinc-700 text-gray-300 rounded-md">--Sort by--  <img src={chevron} className='w-5' /></div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            {produceList.map((produce, index) => (
              <ProduceCard
                key={index}
                img={produce.imageUrl}
                name={produce.name}
                quantity={produce.quantity}
                basePrice={produce.basePrice}
                currentPrice={produce.currentPrice}
                bidActive={produce.bidActive}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Marketplace