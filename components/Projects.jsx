import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { Button } from "@/components/ui/button"
const Projects = () => {
    const myProjects = [
        {
            name: "Kawe",
            description: "Create personalized study plans for your classes, powered by AI, that adapt to your learning style",
            tools: ["NextJS", "Figma"],
            url: "https://www.kawe.app/"

        },
        {
            name: "Automated Study Worksheets",
            description: "Automatically generate study worksheets for any subject or topic with just a few clicks. ",
            tools: ["NextJS", "PostgreSQL",],
            url: "https://github.com/toluodunuga23/study-worksheet-app"

        },



        {
            name: "Ultimate Meal App",
            description: "One-stop shop for meal planning, grocery shopping, and recipe management and meal spots near you.",
            tools: ["NextJS"],
            url: "https://github.com/toluodunuga23/meal-app"

        },

    ]


    return (
        <>
            <div className=' max-w-5xl mx-auto h-screen flex-col items-center justify-center gap-5 mt-12 '>
                <h1 className="font-Ovo text-3xl text-center">Highlighted Projects </h1>

                <div className='grid grid-cols-3  gap-4 place-items-center mt-6 '>
                    {myProjects.map((project, index) => (
                        <div key={index} className='max-w-sm rounded-lg shadow-lg px-6 pb-6 pl-2 border-2 border-grey-500  h-64'>
                            <div>
                                <div className="font-bold text-xl mb-2 ml-3 mt-2">{project.name}</div>
                            </div>
                            <p className="text-gray-700 text-base ml-3">
                                {project.description}
                            </p>
                            <div key={index} className=" mt-4 flex items-end flex-wrap gap-1">
                                {project.tools.map((tool, index) => (
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-5 mb-2" key={index}>{tool}</span>
                                ))}
                            </div>
                            <Link href={project.url} target="_blank">
                                <Button className='w-23 mt-8 bg-white text-black border border-gray-600 cursor-pointer hover:bg-slate-200'>{project.name != "Kawe" ? (
                                    <>
                                        <Image src={assets.github} alt="" className='rounded-md h-7 w-7' /> View Project
                                    </>
                                ) : <>
                                    <Image src={assets.web_icon_dark} alt="" className='rounded-md h-7 w-7' /> View Website
                                </>}
                                </Button>

                            </Link>

                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Projects
