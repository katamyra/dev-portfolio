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
  let exclude = ["epitaph", "AdressBook", "katamyra"]
  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch('/api');
      if (!response.ok) {
        console.error('Failed to fetch repos');
        return;
      }

      const reposVal = await response.json();
      console.log(reposVal);
      const filteredRepos = reposVal.filter(item => !exclude.includes(item.name));
      const sortedRepos = filteredRepos.sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());
      setRepos(sortedRepos);

    }

    fetchRepos();
  }, []);
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {repos.map(({ name, description, clone_url }) => (
          <div key={name} className="card w-96 bg-gray-900 text-primary-content">
          <div className="card-body">
            <h2 className="card-title text-white">{ name}</h2>
            <p className="text-white">{description}</p>
            <div className="card-actions justify-end">
              <button className="btn bg-purple-500"><a target="_blank" href={clone_url}>Learn More</a></button>
            </div>
          </div>
        </div>
          ))}
        </div>
        ) : (
          <p>Data Currently Loading...</p>
        )}
      </div>      
      

    </div>
  );
}
