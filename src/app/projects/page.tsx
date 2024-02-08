"use client"
import ProjectsCard from "@/components/ui/ProjectsCard"
import Image from 'next/image';
import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import HeaderNav from "@/components/ui/HeaderNav";
import ParticleBackground from '@/components/ui/ParticleBackground' 
import {ContactSheet} from "@/components/ui/ContactSheet";
import {Raleway} from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from '@/components/ui/Header';
import AnimatedCursor from 'react-animated-cursor';

const raleway = Raleway({subsets: ["latin"]});


export default function Projects() {
    let projectNames = ["Project Iris", "Medixly", "Smart Page"]
    let descriptions = ["Worked on science Fair Project (first place winner in Orange County Science and Engineering Fair) which uses machine learning techniques such as semantic segmentation in order to analyze the eye movement patterns of different subject groups in order to determine what specific variables they need to work on. Main variables analyzed were decision time, distraction observation, sensitivity, etc in order to create a safer driving society",
"Led a team of software developers in creating an application to detect melanoma cancer using machine learning. We used neural networks in the back-end to detect the ABCD's of melanoma referencing  thousands of melanoma cancer images and their metadata from the ISIC database to accurately track information",
"SmartPage is a chrome extension built to make it easier to traverse pages in textbooks and other pdfs. Often it can be annoying to try to get to a specific textbook page because the first page of the pdf often isnt the first page of the textbook."]
    let workExperience = ["Worked with the data signal processing team by using Python, Matlab, and signal processing techniques to analyze cardiac arrest effect on spreading depolarization", "B", "C"];
    let projectLinks = ["https://github.com/katamyra/ProjectIris", "https://github.com/katamyra/SmartPage", ]
    return (
        
        <div className="h-screen">
            <Header></Header>
            <AnimatedCursor></AnimatedCursor>        
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
                                        <Image src={`/project${index+1}.png`} alt="Project Screenshot" width={500} height={300} className="mx-auto p-2" />
                                    </div>
                                </div>
                              
                                    <div className="flex-1 p-6 text-3xl">
                                        <div className={raleway.className}>
                                            <h1>{descriptions[index]}</h1>
                                    </div>
                                    {index !== 1 && (
                                        <div className="pt-4">
                                            <Button variant="outline" asChild>
                                                <Link href={`$projectLinks[index]`}> Link To Project </Link>
                                            </Button>
                                        </div>
                                    )} 
                                   
                                </div>
                            </div>
                            <ParticleBackground
                                className="absolute -z-10 animate-fade-in w-full h-full"
                                quantity={200}
                            ></ParticleBackground>
                            <div className="divider"></div>

                        </div>
                    ))}
                </div>
                
            </div>    
        </div>
    )
}