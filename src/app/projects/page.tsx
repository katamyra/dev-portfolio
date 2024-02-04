"use client"
import ProjectsCard from "@/components/ui/ProjectsCard"

export default function Projects() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            <ProjectsCard></ProjectsCard>
            <ProjectsCard></ProjectsCard>
            <ProjectsCard></ProjectsCard>
            <ProjectsCard></ProjectsCard>
            {/* Add more ProjectsCard components as needed */}
        </div>
    )
}