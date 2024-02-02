"use client"
import * as React from "react"
import Image from "next/image";
import {Button} from '@/components/ui/button';
import { motion } from "framer-motion";
import AnimatedTextWord from "@/components/ui/AnimatedTextWord";
import Link from "next/link"
import Particles from "react-tsparticles";
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
  

  
  return (
    <div>
      <div className="container mx-auto mt-80 flex flex-col items-center">
      
        <div className="space-x-2">

          <Link href="/projects">
            <Button variant="ghost">Projects</Button> {" "}
          </Link>
          /
          <Drawer>
            <DrawerTrigger><Button variant="ghost">Contact Me</Button></DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Submit</Button>
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
        
      </div>
    </div>
  );
}
