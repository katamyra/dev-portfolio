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
import { Share_Tech } from "next/font/google";
const sharetech = Share_Tech({weight: '400', subsets: ['latin']});
import { Weight } from "lucide-react";
const raleway = Raleway({subsets: ["latin"]});


export default function Projects() {
    let projectNames = ["Project Iris", "Medixly", "Smart Page"]
    let descriptions = ["Worked on science Fair Project (first place winner in Orange County Science and Engineering Fair) which uses machine learning techniques such as semantic segmentation in order to analyze the eye movement patterns of different subject groups in order to determine what specific variables they need to work on. Main variables analyzed were decision time, distraction observation, sensitivity, etc in order to create a safer driving society",
"Led a team of software developers in creating an application to detect melanoma cancer using machine learning. We used neural networks in the back-end to detect the ABCD's of melanoma referencing  thousands of melanoma cancer images and their metadata from the ISIC database to accurately track information",
"SmartPage is a chrome extension built to make it easier to traverse pages in textbooks and other pdfs. Often it can be annoying to try to get to a specific textbook page because the first page of the pdf often isnt the first page of the textbook."]
    let workExperience = ["Worked with the data signal processing team by using Python, Matlab, and signal processing techniques to analyze cardiac arrest effect on spreading depolarization", "B", "C"];
    let projectLinks = ["https://github.com/katamyra/ProjectIris", "https://github.com/katamyra/SmartPage", ]
    return (
        
        <div className="h-screen w-screen">
            <Header></Header>
            <AnimatedCursor></AnimatedCursor>        
            <ParticleBackground
                className="absolute -z-10 animate-fade-in w-full h-full"
                quantity={200}
            ></ParticleBackground>
            <div className={sharetech.className}>
                <h1 className="text-5xl text-center pb-5"> My Projects </h1>
            </div>
            
                <div className="flex gap-10 pl-5 pr-5">
                    <div className="grow card w-96 bg-gray-900 shadow-xl">
                        <figure><img src="/project1.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Project IRIS</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="grow card w-96 bg-gray-900 shadow-xl">
                        <figure><img src="/project2.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Medixly</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn More  </button>
                            </div>
                        </div>
                    </div>
                    <div className="grow card w-96 bg-gray-900 shadow-xl">
                        <figure><img src="/project3Final.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Smart Page</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                

            
            
            
   
        </div>
    )
}