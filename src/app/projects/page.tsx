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
            <div className="flex justify-center">
                <ul className="menu bg-base-400 lg:menu-horizontal rounded-box">
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Contact Me  
                        </a>
                    </li>
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5h6v14H9z" />   
                            </svg>
                            Notes
                        </a>
                    </li>
                </ul>
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
                                        <h1 className="text-white text-4xl text-center"> 
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