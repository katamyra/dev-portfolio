"use client"
import * as React from "react"
import Image from "next/image";
import {Button} from '@/components/ui/button';
import { motion } from "framer-motion";
import AnimatedTextWord from "@/components/ui/AnimatedTextWord";
import Link from "next/link"
import Particles from "react-tsparticles";



export default function Home() {
  
  const particlesOptions = {
    particles: {
      number: {
        value: 80,
      },
      size: {
        value: 10,
      },
      color: {
        value: "#ff0000", // Set your color here. This is red.
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
  }
  
  return (
    <div>
      <div className="container mx-auto mt-80 flex flex-col items-center">
      
        <div className="space-x-2">

          <Link href="/projects">
            <Button variant="ghost">Projects</Button> {" "}
          </Link>
          /
          <Link href="/contact">
            <Button variant="ghost">Contact Me</Button>
          </Link>
          
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-9xl pb-4">
            Katamyra
          </h1>
        </motion.div>
        <Particles
          id="my-particles"
          options={particlesOptions}
        />
        <AnimatedTextWord text="I'm Krish Katariya, a CS Major at Georgia Tech. I am interested in building full stack applications, especially with a specialization in AI."></AnimatedTextWord>
        
      </div>
    </div>
  );
}
