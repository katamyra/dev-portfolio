"use client";
import AnimatedCursor from "react-animated-cursor";
//import { fetchRepos } from "@/app/api/fetchRepos";
import { useEffect, useState } from "react";
export default function Testing() {
  // Example of fetching data from the client-side component
useEffect(() => {
  async function fetchRepos() {
    const response = await fetch('/api');
    if (!response.ok) {
      console.error('Failed to fetch repos');
      return;
    }

    const repos = await response.json();
    console.log(repos); // Do something with the repository data
  }

  fetchRepos();
}, []);

  return (
    <div>
      <AnimatedCursor trailingSpeed={5} outerSize={5}></AnimatedCursor>
    </div>
  );
}
