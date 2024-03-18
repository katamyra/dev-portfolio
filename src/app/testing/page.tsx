"use client";
import AnimatedCursor from "react-animated-cursor";
import { fetchRepos } from "@/app/api/fetchRepos";
import { useEffect, useState } from "react";
export default function Testing() {
  const [repos, setRepos] = useState(null);
  useEffect(() => {
    fetchRepos("katamyra").then((data) => {
      setRepos(data);
    });
    console.log(repos);
  }, []);

  return (
    <div>
      <AnimatedCursor trailingSpeed={5} outerSize={5}></AnimatedCursor>
    </div>
  );
}
