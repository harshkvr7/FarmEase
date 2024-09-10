import React from 'react'
import { Link } from 'react-router-dom'

import linkedInIcon from "../assets/linkedin.svg"
import instagramIcon from "../assets/instagram.svg"
import facebookIcon from "../assets/facebook.svg"
import twitterIcon from "../assets/twitter.svg"
import youtubeIcon from "../assets/youtube.svg"

const Footer = () => {
  return (
    <footer class="bg-black text-white py-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div>
          <h3 class="text-lg font-bold">FarmEase</h3>
          <ul class="mt-4 space-y-2">
            <li>Connect With Us</li>
            <div className="flex gap-5 items-center pt-2">
                <img src={linkedInIcon} className='h-4' />
                <img src={instagramIcon} className='h-4'/>
                <img src={facebookIcon} className='h-4'/>
                <img src={twitterIcon} className='h-4'/>
                <img src={youtubeIcon} className='h-4'/>
            </div>
          </ul>
        </div>


        <div>
          <h3 class="text-lg font-bold">Links</h3>
          <ul class="mt-4 space-y-2">
            <li><a href="#" class="hover:text-purple-600">Marketplace</a></li>
            <li><a href="#" class="hover:text-purple-600">About Us</a></li>
            <li><a href="#" class="hover:text-purple-600">Contact</a></li>
            <li><a href="#" class="hover:text-purple-600">Legal Support</a></li>
            <li><a href="#" class="hover:text-purple-600">Blog</a></li>
          </ul>
        </div>


        <div>
          <h3 class="text-lg font-bold">Quick Links</h3>
          <ul class="mt-4 space-y-2">
            <li><a href="#" class="hover:text-purple-600">Contact</a></li>
            <li><a href="#" class="hover:text-purple-600">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-purple-600">Disclaimer</a></li>
            <li><a href="#" class="hover:text-purple-600">Terms Of Use</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold">Contact</h3>
          <ul class="mt-4 space-y-2">
            <li>Bhagwan Parshuram Institute of Technology, Rohini, New Delhi</li>
            <li>+91 000 999 5555</li>
            <li>Example@email.com</li>
          </ul>
        </div>
      </div>

      <div class="mt-6 text-center text-gray-500 pt-3">
        <p>©2025 FarmEase All Rights Reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer