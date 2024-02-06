"use client"
import * as React from "react"
import Image from "next/image";
import {Button} from '@/components/ui/button';
import { motion } from "framer-motion";
import AnimatedTextWord from "@/components/ui/AnimatedTextWord";
import Link from "next/link"
import AboutMe from '@/components/ui/AboutMe'
import {useRouter} from 'next/navigation'
import { Orbitron } from "next/font/google";
import ParticleBackground from '@/components/ui/ParticleBackground'
import Typewriter from 'typewriter-effect'; 
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
export default function Home() {
  const router = useRouter();

  
  return (
    <div>

      <div className="container mx-auto mt-80 flex flex-col items-center ">
        
        <HeaderNav/>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className={orbitron.className}>
            <h1 className="text-9xl pb-4">
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
           
            <p className="text-2xl pr-2">
              I{"'"}m Krish Katariya, 
            </p>
  
          </motion.div>
          <Typewriter
            options = {{
              strings: ["a Software Developer", "a Georgia Tech CS Student", "an aspiring ML Engineer"],
              autoStart: true,
              delay: 90,
              loop: true,
            }}
          
              />
        </div>
        <AnimatedTextWord text="I am interested in building full stack applications, especially with a specialization in AI."></AnimatedTextWord>
        <AboutMe></AboutMe>
      </div>
      <ParticleBackground
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={400}
      ></ParticleBackground>

    </div>
  );
}
