"use client"
import * as React from "react"
import Image from "next/image";
import {Button} from '@/components/ui/button';
import { motion } from "framer-motion";
import AnimatedTextWord from "@/components/ui/AnimatedTextWord";
import Link from "next/link"
import {useRouter} from 'next/navigation'
import { Orbitron } from "next/font/google";
import ParticleBackground from '@/components/ui/ParticleBackground'
import Typewriter from 'typewriter-effect'; 
import AnimatedCursor from 'react-animated-cursor';
const orbitron = Orbitron({subsets: ["latin"]});
import Header from "@/components/ui/Header";
import { useEffect, useState } from "react";
import Loading from "@/components/ui/Loading";
import { useScroll } from "framer-motion"
import Timeline from "@/components/ui/timeline";


export default function Home() {
  
  const { scrollYProgress } = useScroll();


  const handleClick = () => {
    window.scrollBy({
      top: 600,
      behavior: 'smooth' // You can change this to 'auto' for instant scrolling
    });
   
    
  };
  
  return (
    
    <div>
        <div className="h-screen">
        <motion.div
          className="z-40 fixed top-0 left-0 right-0 h-3 bg-red-400 transform-origin-0"
          style={{ scaleX: scrollYProgress }}
        />
        <Header></Header>
        <div className="mt-40 flex flex-col items-center ">

         
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className={orbitron.className}>
              <h1 className="lg:text-9xl text-3xl pb-4">
                Katamyra
              </h1>
            </div>
          </motion.div>
          <div className="text-2xl pb-4 flex justify-between">
      
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
      
              <p className="lg:text-2xl pr-2 text-xl">
                I{"'"}m Krish Katariya,
              </p>
            </motion.div>
            <div className="lg:text-2xl text-xl text-red-400">
              <Typewriter
                options = {{
                  strings: ["a Software Developer", "a Georgia Tech CS Student", "an aspiring ML Engineer"],
                  autoStart: true,
                  delay: 90,
                  loop: true,
                }}
      
                  />
            </div>
          </div>
          <div className="hidden lg:flex flex-wrap justify-center text-sm lg:text-xl pb-7">
            <AnimatedTextWord text="I am interested in building full stack applications, especially with a specialization in AI."/>
          </div>
      
      
      
            <div className="flex">
              <div className="flex-auto mockup-code w-full lg:w-1/2 bg-gray-900 pt-5 overflow-auto">
                <pre data-prefix="$" className="text-success whitespace-pre-wrap"><code>npm init krish</code></pre>
                <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
                <pre data-prefix=">"><code>Age? 18</code></pre>
                <pre data-prefix=">" className="text-warning"><code>School? Georgia Tech - 4.0</code></pre>
                <pre data-prefix=">" ><code>Favorite Food? Any home cooked meal :)</code></pre>
                <pre data-prefix=">" className="whitespace-pre-wrap hidden lg:block" ><code>Hobbies? Falling asleep to horror audiobooks</code></pre>
                <pre data-prefix=">" ><code>Goals? Learn to cook!</code></pre>
                <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
              </div>
            </div>
      
      
      
      
        </div>
        <ParticleBackground
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={400}
        ></ParticleBackground>
        <AnimatedCursor
          trailingSpeed={5}
          outerSize={5}
        ></AnimatedCursor>
        <div className="fixed bottom-0 w-full z-40 text-white text-center py-4">
            <svg
          className="z-40 h-10 w-10 text-red-400 inline-block align-middle"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      </div>
      
      <div className={orbitron.className}>
        <h1 className="text-3xl w-screen text-center pb-10"> My Timeline</h1>
    
      </div>
      <Timeline/>
      </div>
  
              
)}
