import React from 'react'

const About = () => {
  return (
    <div className='bg-zinc-800 pt-32 pb-32 px-56 text-white mx-auto flex flex-col gap-16'>
      <div className="flex justify-between gap-32">
        <div className="flex flex-col gap-6">
          <span className='text-6xl font-bold'>About Us</span>
          <span className='text-2xl'>FarmEase's mission is just like what the name suggests. Making farming easy. That's it</span>
        </div>
        <img className='w-2/5 object-cover' src='https://images.unsplash.com/photo-1475332831881-e80974377cb7?q=80&w=1879&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      </div>

      <div className="flex justify-between gap-32">
        <img className='w-2/5 object-cover' src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        <div className="flex flex-col gap-6">
          <span className='text-4xl font-bold'>Our Mission: Helping farmers sell their produce, effectively and efficiently.</span>
          <span className='text-xl'>We believe in more than just expanding our reach; we’re committed to enhancing the entire farming ecosystem. By connecting farmers directly with buyers, we foster a partnership where the success of your farm is intertwined with the satisfaction of your customers. Together, we grow stronger—win-win for everyone!</span>
        </div>
      </div>

      <div className="text-xl">
        In 2024, six second-year students from Bhagwan Parshuram Institute of Technology recognized a critical gap in the agricultural sector. They saw that farmers needed better access to buyers and more secure, fair trading opportunities. Motivated by this insight, they launched FarmEase—a platform dedicated to bridging the gap between farmers and buyers through contract farming. FarmEase aims to empower farmers with guaranteed markets and fair contracts, while providing buyers with high-quality produce and reliable sources. Together, they’re transforming agriculture for a more connected and equitable future.
      </div>

      <div className="text-xl">
      As FarmEase evolved, it expanded beyond mere connections to become a comprehensive, integrated platform designed to streamline the contract farming process and enhance agricultural trade. FarmEase leverages cutting-edge technology and data-driven insights to provide a seamless experience for both farmers and buyers. With its smart, AI-powered tools and intuitive interface, FarmEase is helping farmers and buyers alike to cultivate more fruitful partnerships and drive growth in the agricultural sector.
      </div>
    </div>

  )
}

export default About;