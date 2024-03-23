"use client";
import ParticleBackground from "@/components/ui/ParticleBackground";
import Header from "@/components/ui/Header";
import AnimatedCursor from "react-animated-cursor";
import { Share_Tech } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
const sharetech = Share_Tech({ weight: "400", subsets: ["latin"] });


export default function Projects() {
  const [repos, setRepos] = useState(null);
  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch('/api');
      if (!response.ok) {
        console.error('Failed to fetch repos');
        return;
      }

      const reposVal = await response.json();
      console.log(reposVal)
      setRepos(reposVal);
    }

    fetchRepos();
  }, []);
  let projectNames = ["Project Iris", "Medixly", "Smart Page"];
  let descriptions = [
    "First place science fair project using machine learning techniques such as semantic segmentation to analyze eye movement patterns.",
    "Mobile app using neural networks to detect melanoma cancer vs moles given a user picture.",
    "Chrome extension that allows users to easily traverse textbook pages.",
    "IntelliPrep is a smart study optimizer. After inputting information about their next tests, students can use IntelliPrep to more efficiently plan out their study schedules.    ",
  ];
  let projectLinks = [
    "https://github.com/katamyra/ProjectIris",
    "https://github.com/katamyra/SmartPage",
  ];
  return (
    <div className="h-screen w-screen">
      <Header></Header>
      <AnimatedCursor trailingSpeed={5} outerSize={5}></AnimatedCursor>
      <ParticleBackground
        className="animate-fade-in absolute -z-10 h-full w-full"
        quantity={200}
      ></ParticleBackground>
      <div className={sharetech.className}>
        <h1 className="pb-5 text-center text-5xl"> My Projects </h1>
      </div>

      <div className="container mx-auto px-4">

  
          {repos ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {repos.map(({ name }) => (
              <div key={name} className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
            </div>
            ))}
          </div>
        ) : (
          <p>No data available</p>
        )}
      </div>      
      

    </div>
  );
}
