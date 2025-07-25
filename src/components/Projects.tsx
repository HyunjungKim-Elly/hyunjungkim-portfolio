'use client'

import { useState } from 'react'
import { ProjectModal } from './ProjectModal'
import { ProjectCard } from './ProjectCard'

interface Project {
    id: string
    title: string
    description: string
    imageUrl: string
    link?: string
    images: string[]
}

const projects: Project[] = [
    {
        id: 'enuma-lms',
        title: 'Enuma LMS 리팩토링',
        description: 'Vue 기반 LMS를 React + Zustand로 리팩토링',
        imageUrl: '/images/enumaschool_lms.png',
        link: 'https://enumaschool.com/lms', // 없으면 생략해도 돼
        images: ['/images/enumaschool_lms.png'],
    },
    {
        id: 'enuma-landing',
        title: 'Enuma 소개 사이트',
        description: '소개 사이트 Vue2 → React 리팩토링 및 다국어 지원',
        imageUrl: '/images/enuma_landing.png',
        images: ['/images/enuma_landing.png'],
    },
    {
        id: 'aidt-dashboard',
        title: 'AIDT 교과서 대시보드',
        description: '학습자 데이터 시각화 대시보드 개발',
        imageUrl: '/images/aidt_dashboard.png',
        images: ['/images/aidt_dashboard.png'],
    },
]

export const ProjectSection = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    return (
        <section id="projects" className="px-6 py-16 bg-gray-50">
            <h2 className="text-2xl font-semibold mb-6">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        image={project.imageUrl}
                        onClick={() => setSelectedProject(project)}
                    />
                ))}
            </div>

            {selectedProject && (
                <ProjectModal
                    isOpen={!!selectedProject}
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    )
}