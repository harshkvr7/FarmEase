import React from 'react'

import linkedInIcon from "../assets/linkedin.svg"
import instagramIcon from "../assets/instagram.svg"
import facebookIcon from "../assets/facebook.svg"
import twitterIcon from "../assets/twitter.svg"
import youtubeIcon from "../assets/youtube.svg"

const Contact = () => {
  return (
    <div className='flex bg-zinc-800 text-white w-full justify-center px-72 py-36'>
      <div className="flex-1 flex flex-col gap-6 bg-zinc-900 p-6 rounded-l-lg">
        <div className="text-5xl flex flex-col">
          Contact Us
          <span className='text-lg pt-5'>We're here to help! Whether you're a farmer looking to connect with Buyers or a Contractor seeking quality produce, feel free to reach out with any questions or concerns.</span>
        </div>
        <div className="text-lg"><b>For Farmers:</b> Have questions about listing your produce or need support? Contact our farmer support team at <a href="#" className='text-blue'>fefarmersupport@gmail.com</a> or call us at +91 9214331241</div>

        <div className="text-lg"><b>For Buyers:</b>  Nood assistance with your orders or have inquiries about our products? Get in touch with our buyer support team at febuyersupport@gmail.com or call us at +91-9214331241</div>
        <div className="flex gap-5 items-center">
                <img src={linkedInIcon} className='h-4' />
                <img src={instagramIcon} className='h-4'/>
                <img src={facebookIcon} className='h-4'/> 
                <img src={twitterIcon} className='h-4'/>
                <img src={youtubeIcon} className='h-4'/>
            </div>
      </div>
      <div className="flex-1 flex flex-col gap-8 bg-zinc-900 justify-center p-6 rounded-r-lg">
        <div className="flex gap-3 w-full justify-between">
          <input  className='text-black  p-4 rounded-md w-1/2' placeholder='Your Name*'/>
          <input className='text-black p-4 rounded-md w-1/2' placeholder='Your Email*' />
        </div>

        <input type="text" className='text-black p-4 rounded-md w-full' placeholder='Your subject*'/>
        <input type="text" className='text-black p-4 rounded-md w-full h-1/3' placeholder='Your message'/>

        <div className='px-6 py-2 bg-green-600 w-fit text-center rounded-md hover:bg-green-500 hover:cursor-pointer'>SEND</div>
        
      </div>
    </div>
  )
}

export default Contact