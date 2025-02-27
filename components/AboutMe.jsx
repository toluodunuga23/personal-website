import React from 'react'
import { assets, infoList } from '@/assets/assets'
import Image from 'next/image'

const AboutMe = () => {

  const myTools = [
    {
      name: "Figma",
      image: assets.figma,
      description: "Design Tool"

    },
    {
      name: "React",
      image: assets.react,
      description: "Framework"

    },

    {
      name: "Tailwind CSS",
      image: assets.tailwind,
      description: "User Interface"

    },
    {
      name: "Next JS",
      image: assets.nextJs,
      description: "Framework"

    },
       {
      name: "Next JS",
      image: assets.nextJs,
      description: "Framework"

    },

  ]
  return (
    <div id="about" className="w-full px-[12%] scroll-mt-10 ">
      <h4 className='text-center mb-2 text-lg font-Ovo mt-20'>
        Introduction
      </h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>
      <div>
        <div className="flex w-full flex-col lg:flex-column items-center gap-20 my-20">
          <div className="flex-1">
            <p className="mb-10 max-w-2xl font-Ovo"> I am a Self-Taught Frontend Developer who is currently working as Software Developer in FinTech. I am passionate about continued learning in the field. I  love studying in different fields. I beleive the best way to gain more experiences to write down </p>

              {/* <div className="w-32 h-32 border-2 rounded-lg  flex items-center justify-center ">
                <div className="font-Ovo font-bold text-sm mb-2 whitespace-nowrap ">Leetcode Notes</div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
