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
import MeCarousel from '@/components/ui/MeCarousel'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ContactSheet } from "@/components/ui/ContactSheet";
import HeaderNav from "@/components/ui/HeaderNav";
const orbitron = Orbitron({subsets: ["latin"]});
import Header from "@/components/ui/Header";
export default function Home() {
  const router = useRouter();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: "./LoadingAnim.json",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  
  return (
    <div>
      <Header></Header>
      <div className="container mt-30 lg:mt-60 flex flex-col items-center ">
      
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className={orbitron.className}>
            <h1 className="lg:text-9xl text-xl pb-4">
              Katamyra
            </h1>
          </div>
        </motion.div>

        <div className="text-2xl flex justify-between">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
           
            <p className="lg:text-2xl pr-2 text-sm">
              I{"'"}m Krish Katariya, 
            </p>
  
          </motion.div>
          <div className="lg:text-2xl text-sm text-red-400">
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
        <div className="flex flex-wrap justify-center text-sm lg:text-xl pb-5">
          <AnimatedTextWord text="I am interested in building full stack applications, especially with a specialization in AI."/>
        </div>
        

          
        
          <div className="flex">
            <div className="flex-auto mockup-code w-1/2 bg-gray-900 pt-5">
              <pre data-prefix="$" className="text-success"><code>Name: Krish Katariya</code></pre>
              <pre data-prefix=">" className="text-warning"><code>Age: 18</code></pre>
              <pre data-prefix=">" ><code>Favorite Food? Home Cooked Meals</code></pre>
              <pre data-prefix=">" className="text-success"><code>Add More Fillers Here!</code></pre>
              <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
            
              <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
            
              <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
            
            
            </div>
          </div>

          
       
    
     


      </div>
      <ParticleBackground
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={400}
      ></ParticleBackground>
      <AnimatedCursor></AnimatedCursor>

    </div>
  );
}
