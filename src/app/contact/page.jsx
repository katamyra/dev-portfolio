"use client"
import { motion, useScroll } from "framer-motion"

export default function Contact() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div style={{ scaleX: scrollYProgress }} />  
  )
}