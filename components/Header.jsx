import React from 'react'
import { assets } from '@/assets/assets'
import Image from "next/image"
import Link from 'next/link'



const Header = () => {
     const socialLinks = [
          {
              name: "Linkedin",
              image: assets.linkedin,
              url:"https://www.linkedin.com/in/toluodunuga/"
  
          },
          {
              name: "Github",
              image: assets.github,
                url:"https://github.com/toluodunuga23"
          }
  
      ]






  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-9/10 flex flex-col items-center justify-center gap-4 mt-60'>
        
            <Image src={assets.my_profile} alt="" className="relative inline-block h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-28 lg:w-28 !rounded-full object-cover object-center"/>
            <h3 className="flex items-end gap-2 text-xl md:text=2xl mb-3 font-Ovo ">Hi! I'm Tolu Odunuga 👋🏾</h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">Frontend Web Developer</h1>
         
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
                <Link href="https://www.kawe.app/" target="_blank" className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-black text-white'>Latest Project<Image src={assets.right_arrow_white} alt="" className="w-4"/></Link>
                <a href="/Tolu-Resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>My Resume <Image src={assets.download_icon} alt="" className="w-4"/></a>
            </div> 

             <div className='flex justify-center mt-1 items-center '>
                            {socialLinks.map((links, index) => (

                                <div key={index} className='flex items-center p-1 px-2  rounded-md' >
                                  <Link href={links.url}  target="_blank">
                                    <Image src={links.image} alt="" className='rounded-md h-11 w-11' />
                                    </Link>
                                </div>
                            ))}
                        </div>

            


    </div>
  )
}

export default Header
