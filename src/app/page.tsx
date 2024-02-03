"use client"
import * as React from "react"
import Image from "next/image";
import {Button} from '@/components/ui/button';
import { motion } from "framer-motion";
import AnimatedTextWord from "@/components/ui/AnimatedTextWord";
import Link from "next/link"
import AboutMe from '@/components/ui/AboutMe'
import {useRouter} from 'next/navigation'

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

export default function Home() {
  const router = useRouter();
  
  return (
    <div>
      <div className="container mx-auto mt-80 flex flex-col items-center ">
      
        <div className="space-x-2 pr-4">
        <Button variant="ghost">
          <a href="/projects">Projects </a>{"   "}
        </Button>


          /
          <Drawer>
            <DrawerTrigger asChild><Button variant="ghost">Contact Me</Button></DrawerTrigger>
            <DrawerContent>
              <div>
                <DrawerHeader>
                  <DrawerTitle>Contact Me!</DrawerTitle>
                  <DrawerDescription>Here are the links to contact me / view my socials on different pages</DrawerDescription>
                  <p> My Email: krishkatariya@outlook.com </p>
                  <p>Github: <a href="https://github.com/katamyra">github.com/katamyra</a></p>
                  <p>Linked In: <a>Linked In Link</a></p>
                  
                </DrawerHeader>
              </div>
              <DrawerFooter>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer> 
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
        <AnimatedTextWord text="I'm Krish Katariya, a CS Major at Georgia Tech. I am interested in building full stack applications, especially with a specialization in AI."></AnimatedTextWord>
        <AboutMe></AboutMe>
      </div>
    </div>
  );
}
