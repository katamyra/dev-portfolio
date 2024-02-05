"use client"
import ProjectsCard from "@/components/ui/ProjectsCard"
import Image from 'next/image';
import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import HeaderNav from "@/components/ui/HeaderNav";
import ParticleBackground from '@/components/ui/ParticleBackground'

export default function Projects() {
    let projectNames = ["Project Iris", "Medixly", "Smart Page"]
    let descriptions = ["Worked on science Fair Project (first place winner in Orange County Science and Engineering Fair) which uses machine learning techniques such as semantic segmentation in order to analyze the eye movement patterns of different subject groups in order to determine what specific variables they need to work on. Main variables analyzed were decision time, distraction observation, sensitivity, etc in order to create a safer driving society",
"Led a team of software developers in creating an application to detect melanoma cancer using machine learning. We used neural networks in the back-end to detect the ABCD's of melanoma referencing  thousands of melanoma cancer images and their metadata from the ISIC database to accurately track information",
]
    return (
        <div className="h-screen">
            <div className="navbar bg-base-600">
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </button>
            </div>
        </div>

            <HeaderNav/>
            <ParticleBackground
                className="absolute -z-10 animate-fade-in w-full h-full"
                quantity={200}
            ></ParticleBackground>
            <div className="flex">
                <div className="flex-1 p-4">
            
                    {projectNames.map((item, index) => (
                        <div key={index}>
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
                            <ParticleBackground
                                className="absolute -z-10 animate-fade-in w-full h-full"
                                quantity={200}
                            ></ParticleBackground>
                        </div>
                    ))}
                </div>
                
            </div>
            
        </div>
    )
}