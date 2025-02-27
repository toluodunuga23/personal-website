import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'




const Tools = () => {

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
            name: "Typescript",
            image: assets.typescript,
            description: "Programming Language"

        },
        {
            name: "Git",
            image: assets.git,
            description: "Version Control"

        },

    ]

    return (
        <div className=" max-w-5xl  mx-auto flex-col items-center justify-center gap-6 mt-8 ">
            <h1 className="font-Ovo text-3xl text-center">Technologies </h1>
            <div className='grid grid-cols-3 gap-6 justify-center mt-6 '>
                {myTools.map((skills, index) => (
                    <div key={index} className='flex items-center p-1 px-7 gap-4 rounded-md  border-2 border-indigo-500 shadow-xl'>
                        <Image src={skills.image} alt="" className='rounded-md h-14 w-14' />
                        <div>
                            <p className='font-semibold'>{skills.name}</p>
                            <p>{skills.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tools
