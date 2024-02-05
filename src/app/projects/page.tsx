"use client"
import ProjectsCard from "@/components/ui/ProjectsCard"
import Image from 'next/image';
import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import HeaderNav from "@/components/ui/HeaderNav";
import ParticleBackground from '@/components/ui/ParticleBackground'

export default function Projects() {
    let projectNames = ["Project Iris", "Project2", "Project3"]
    let descriptions = ["Worked on science Fair Project (first place winner in Orange County Science and Engineering Fair) which uses machine learning techniques such as semantic segmentation in order to analyze the eye movement patterns of different subject groups in order to determine what specific variables they need to work on. Main variables analyzed were decision time, distraction observation, sensitivity, etc in order to create a safer driving society "]
    return (
        <div>
            <HeaderNav/>
            <div className="flex">
                <div className="flex-1 p-4">
            
                    {projectNames.map((item, index) => (
                        <div data-aos="fade" key={index} className={`flex pb-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                            <div className={`mockup-window border bg-base-600 w-1/2 ${index % 2 === 0 ? 'border-r' : 'border-l'}`}>
                                <div className="flex justify-center px-4 pb-10 bg-base-350">
                                    <h1 className="text-4xl text-center">
                                        {item}
                                    </h1>
                                </div>
                                <div className="flex justify-center px-4 pb-10 bg-base-350">
                                    <Image src="/screenshot.png" alt="Project Screenshot" width={500} height={300} className="mx-auto p-2" />
                                </div>
                            </div>
                            <div className="flex-1 p-6 text-3xl">
                                <h1>{descriptions[index]}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ParticleBackground
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={200}
            ></ParticleBackground>
        </div>
    )
}