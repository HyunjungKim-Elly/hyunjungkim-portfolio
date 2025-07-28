'use client'

import { useState } from 'react'
import { ProjectModal } from './ProjectModal'
import { ProjectCard } from './ProjectCard'

export interface Project {
    title: string
    year: string
    description: string
    image: string
    link?: string
    projectItem?: ProjectItem
}
export interface ProjectItem {
    title: string
    year: string
    description: string
    techStack: string[]
    contribution: string
    image: string
    images: string[]
}


const projects: Project[] = [
    {
        title: "projects_title_1",
        year: '2024.11 - 2024.12',
        image: "/images/enuma_landing.png",
        description: "projects_description_1",
        projectItem: {
            title: 'projectitem_title_1',
            year: '2024.11 - 2024.12',
            description:
                'projects_description_1',
            techStack: ['React', 'Zustand', 'Tailwind CSS'],
            contribution: 'projectitem_contribution_1',
            image: '/images/projects/enuma-school-landing.png',
            images: ['/images/enuma_landing.png'],
        },
    },
    {
        title: "projects_title_2",
        year: '2024.05 - 2024.10',
        image: "/images/aidt_dashboard.png",
        description: "projects_description_2",
        projectItem: {
            title: 'projectitem_title_2',
            year: '2024.05 - 2024.10',
            description:
                'projects_description_2',
            techStack: ['React', 'Zustand', 'Tailwind CSS', 'Recharts'],
            contribution: 'projectitem_contribution_2',
            image: '/images/projects/aidt-dashboard.png',
            images: ['/images/aidt_dashboard.png'],
        },
    },
    {
        title: "projects_title_3",
        year: '2025.01 - 2025.06',
        image: "/images/enumaschool_lms.png",
        description: "projects_description_3",
        projectItem: {
            title: 'projectitem_title_3',
            year: '2025.01 - 2025.06',
            description:
                'projects_description_3',
            techStack: ['Vue2', 'React', 'Zustand', 'Tailwind CSS'],
            contribution: 'projectitem_contribution_3',
            image: '/images/projects/enuma-lms.png',
            images: ['/images/enumaschool_lms.png'],
        },
    },
    {
        title: "projects_title_4",
        year: '2023.05 - 2023.12',
        image: "/images/market_main.png",
        description: "projects_description_4",
        projectItem: {
            title: 'projectitem_title_4',
            year: '2023.05 - 2023.12',
            description:
                'projects_description_4',
            techStack: ['React', 'Next.js', 'Zustand', 'Tailwind CSS', 'SWR', 'Node.js', 'Nest.js', 'TypeORM'],
            contribution: 'projectitem_contribution_4',
            image: '/images/projects/mongnyang-market.png',
            images: ['/images/market_main.png', '/images/market_add.png', '/images/market_cart.png', '/images/market_address.png'],
        },
    },
    {
        title: "projects_title_5",
        year: '2023.05 - 2023.09',
        image: "/images/community_main.png",
        description: "projects_description_5",
        projectItem: {
            title: 'projectitem_title_5',
            year: '2023.05 - 2023.09',
            description:
                'projects_description_5',
            techStack: ['React', 'Next.js', 'Zustand', 'Tailwind CSS', 'SWR', 'Node.js', 'Nest.js', 'TypeORM',],
            contribution: 'projectitem_contribution_5',
            image: '/images/projects/mongnyang-community.png',
            images: ['/images/community_main.png', '/images/community_articles.png', '/images/community_food.png'],
        },
    },
    {
        title: "projects_title_6",
        year: '2020.01 - 2020.01',
        image: "/images/hr_register.png",
        description: "projects_description_6",
        projectItem: {
            title: 'projectitem_title_6',
            year: '2020.01 - 2020.01',
            description:
                'projects_description_6',
            techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
            contribution: 'projectitem_contribution_6',
            image: '/images/projects/hr-management.png',
            images: ['/images/hr_register.png', '/images/hr_add.png', '/images/hr_department.png'],
        },
    },
];
export const ProjectSection = () => {

    const [selectedProject, setSelectedProject] = useState<Project['projectItem'] | null>(null)

    return (
        <section id="projects" className="my-10 space-y-6 px-6 w-full">
            <h2 className="text-3xl font-bold">Projects</h2>
            {projects.map((project, idx) => (
                <ProjectCard year={project.year} image={project.image} description={project.description} title={project.title} key={idx} onClick={() => setSelectedProject(project.projectItem)} />
            ))}
            {selectedProject && <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />}
        </section>
    );
}