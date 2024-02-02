"use client"
import Particles from "react-tsparticles"
export default function Projects() {
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
        <div className="h-screen">
        <Particles
            id="my-particles"
            options={particlesOptions}
            />
        </div>
    )
}