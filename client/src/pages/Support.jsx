import React from 'react'

const Support = () => {
  return (
    <div className='w-full bg-zinc-800 text-white flex justify-center items-center pb-16'>
      <div className='pt-28 px-32 flex flex-col gap-10'>

        <div className="text-4xl pb-6 ">
          Legal Support Services
        </div>

        <div className='flex gap-16 justify-between'>
          <div className="flex flex-col w-3/5 gap-4">
            <span className='text-xl'>Our website offers expert legal advice tailored specifically for farmers, helping them navigate the complexities of agricultural law. Whether It's land ownership disputes, environmental regulations, water rights, or contract negotiations with suppliers and distributors, our legal professionals provide practical solutions to safeguard your farming operations. We understand the unique challenges that farmers face and offer clear guidance on Platters such as compliance with agricultural policies. securing farm subsidies, and resolving disputes with government bodies. Our goal is to help farmers protect their livelihoods and maintain smooth operations by ensuring their legal matters are expertly managed.</span>
            <span className='text-xl'>In addition to offering personalized legal counsel, our platform provides educational resources to keep farmers informed about their rights and obligations under changing agricultural laws. From updates on new legislation to step-by-step guides for managing legal issues, our resources are designed to empower farmers to make informed decisions. Whether you're a small family-owned farm or a large-scale operation, we connect you with experienced lawyers who specializa in agricultural law, ensuring that you receive the best possible advice for your specific needs</span>
          </div>
            <img className="w-2/5 object-cover" src="https://lawbhoomi.com/wp-content/uploads/2023/04/law-28.webp" alt="" />
          
        </div>

        <div className='flex w-2/5 items-center flex-col border self-center justify-center border-zinc-600 rounded-md gap-4 px-6 py-5'>
          <div className='text-3xl'>Talk to a Lawyer</div>
          <div className='text-lg'>Just fill in your detalls to Immediately get the best matched lawyers for legal issues. Every lawyer profile has been verified, and you can contact them within minute.</div>
          <div className='flex flex-col gap-6  '>
            <input className="rounded px-4 py-1 w-56" type="text" placeholder='Your Name' />
            <input className="rounded px-4 py-1 w-56" type="text" placeholder='Mobile Number' />
            <input className="rounded px-4 py-1 w-56" type="text" placeholder='Your Gmail' />
            <input className="rounded px-4 py-1 w-56" type="text" placeholder='Select Your City' />
          </div>
          <div class="flex items-center ">
            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "/>
              <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree to <span className="text-blue-500">LawRato's terms of use</span></label>
          </div>

          <div className='px-2 bg-blue-700 w-fit py-1 rounded-md '>Find Lawyer</div>

        </div>
      </div>


    </div>
  )
}

export default Support