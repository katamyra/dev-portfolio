"use client"
import { motion, useScroll } from "framer-motion"
import { useRef } from "react"

export default function Contact() {
  const scrollRef = useRef(null)
  
  return (
    <div ref={scrollRef} style={{ overflow: "scroll" }}>
      <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <h1>Test 123 123</h1>
    </motion.div>
    </div>
  )
}