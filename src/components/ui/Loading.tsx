"use client"
import { Progress } from "@/components/ui/progress"

import { motion, useScroll } from "framer-motion"
import { useRef } from "react"

export default function Loading() {
  const scrollRef = useRef(null)
  
  return (
    <div>
        <div className="flex justify-center">
            <progress className="progress w-screen pt-50 items-center"></progress>
        </div>
    </div>
    )
}

