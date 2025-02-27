import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
const Projects = () => {
    const myProjects = [
        {
            name: "Kawe",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
            tools:["NextJS"]

        },
        {
            name: "Meal App",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."

        },

    ]
    return (
        <>
            <div className=' max-w-6xl mx-auto h-screen flex-col items-center justify-center gap-8 mt-12'>
                <h1 className="font-Ovo text-3xl text-center">Highlighted Projects </h1>

                <div className='grid grid-cols-2 gap-4 mt-6 place-items-center  '>
                    {myProjects.map((project, index) => (
                        <div key={index} className='max-w-sm rounded-lg shadow-lg px-6 pb-6 pl-2 border-2 border-grey-500 '>
                            <div>
                                <div className="font-bold text-xl mb-2 ml-3 mt-2">{project.name}</div>
                            </div>
                            <p className="text-gray-700 text-base ml-3">
                              {project.description}
                            </p>
                            <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Projects
