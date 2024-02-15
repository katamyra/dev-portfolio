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

  

  
const raleway = Raleway({subsets: ["latin"]});


export default function Projects() {
    let projectNames = ["Project Iris", "Medixly", "Smart Page"]
    let descriptions = ["First place science fair project using machine learning techniques such as semantic segmentation to analyze eye movement patterns.", "Mobile app using neural networks to detect melanoma cancer vs moles given a user picture.", 
    "Chrome extension that allows users to easily traverse textbook pages.", 'IntelliPrep is a smart study optimizer. After inputting information about their next tests, students can use IntelliPrep to more efficiently plan out their study schedules.    ']
    let projectLinks = ["https://github.com/katamyra/ProjectIris", "https://github.com/katamyra/SmartPage", ]
    return (
        
        <div className="h-screen w-screen">
            <Header></Header>
            <AnimatedCursor
          trailingSpeed={5}
          outerSize={5}
        ></AnimatedCursor>       
            <ParticleBackground
                className="absolute -z-10 animate-fade-in w-full h-full"
                quantity={200}
            ></ParticleBackground>
            <div className={sharetech.className}>
                <h1 className="text-5xl text-center pb-5"> My Projects </h1>
            </div>
            
            
            <div className="flex flex-row"> 
                <div className="flex flex-wrap gap-10 md:pl-10 justify-between">
                    <div className="w-full md:w-1/4 md:basis-2/7">
                        <div className="card bg-slate-900 shadow-xl h-full">
                            <figure><img src="/project1.png" alt="Project IRIS Image" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Project IRIS</h2>
                                <p>{descriptions[0]}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary"><Link href="https://github.com/katamyra/ProjectIris" target="_blank">Learn More</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 md:basis-2/7">
                        <div className="card bg-slate-900 shadow-xl h-full">
                            <figure><img src="/project2.png" alt="Medixly Image" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Medixly</h2>
                                <p>{descriptions[1]}</p>
                                <div className="card-actions justify-end">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 md:basis-2/7">
                        <div className="card bg-slate-900 shadow-xl h-full">
                            <figure><img src="/project3Final.jpg" alt="Smart Page Image" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Smart Page</h2>
                                <p>{descriptions[2]}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary"><Link href="https://github.com/katamyra/SmartPage" target="_blank">Learn More</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 md:basis-2/7">
                        <div className="card bg-slate-900 shadow-xl h-full">
                            <figure><img src="/project4.png" alt="Intelliprep Image" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Intelliprep</h2>
                                <p>{descriptions[3]}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary"><Link href="https://github.com/IntelliPrep/code" target="_blank">Learn More</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}