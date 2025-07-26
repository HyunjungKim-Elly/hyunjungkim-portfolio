'use client'

import { useState } from 'react'
import { ProjectModal } from './ProjectModal'
import { ProjectCard } from './ProjectCard'

export interface Project {
    title: string
    year: string
    description: string
    image: string
    images: string[]
    link?: string
}

// const projects: Project[] = [
//     {
//         id: 'enuma-lms',
//         title: 'Enuma LMS 리팩토링',
//         description: 'Vue 기반 LMS를 React + Zustand로 리팩토링',
//         imageUrl: '/images/enumaschool_lms.png',
//         link: 'https://enumaschool.com/lms', // 없으면 생략해도 돼
//         images: ['/images/enumaschool_lms.png'],
//     },
//     {
//         id: 'enuma-landing',
//         title: 'Enuma 소개 사이트',
//         description: '소개 사이트 Vue2 → React 리팩토링 및 다국어 지원',
//         imageUrl: '/images/enuma_landing.png',
//         images: ['/images/enuma_landing.png'],
//     },
//     {
//         id: 'aidt-dashboard',
//         title: 'AIDT 교과서 대시보드',
//         description: '학습자 데이터 시각화 대시보드 개발',
//         imageUrl: '/images/aidt_dashboard.png',
//         images: ['/images/aidt_dashboard.png'],
//     },
// ]

const projects: Project[] = [
    {
        title: "Enuma School 소개 사이트 리팩토링",
        year: "2024",
        image: "/images/enuma_landing.png",
        description: "Vue2 기반 레거시를 React + Zustand + Tailwind로 리팩토링",
        images: ['/images/enuma_landing.png'],
    },
    {
        title: "AIDT 교과서 대시보드 개발",
        year: "2024",
        image: "/images/aidt_dashboard.png",
        description: "학습자 데이터 시각화 대시보드 개발",
        images: ['/images/aidt_dashboard.png'],
    },
    {
        title: "Enuma School LMS 리팩토링",
        year: "2023",
        image: "/images/enumaschool_lms.png",
        description: "Vue2 기반 레거시를 React + Zustand + Tailwind로 리팩토링",
        images: ['/images/enumaschool_lms.png'],
    },
    {
        title: "멍냥마켓",
        year: "2023",
        image: "/images/market_main.png",
        description: "이커머스 전용 상품 옵션 UI 개선 및 주문 흐름 설계",
        images: ['/images/market_main.png', '/images/market_ad.png', '/images/market_cart.png', '/images/market_address.png'],
    },
    {
        title: "멍냥보감 웹 커뮤니티",
        year: "2021",
        image: "/images/community_main.png",
        description: "펫 콘텐츠 기반 큐레이션 서비스 초기 기획 및 MVP 개발",
        images: ['/images/community_main.png']
    },
    {
        title: "HR 통합 관리 시스템 개발",
        year: "2021",
        image: "/images/hr_register.png",
        description: "HR 통합 관리 시스템 개발",
        images: ['/images/hr_register.png', '/images/hr_add.png', '/images/hr_department.png']
    },
];
export const ProjectSection = () => {

    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    return (
        <section id="projects" className="my-20 space-y-6 px-6 w-full">
            <h2 className="text-3xl font-bold">Projects</h2>
            {projects.map((project, idx) => (
                <ProjectCard year={project.year} image={project.image} description={project.description} title={project.title} key={idx} onClick={() => setSelectedProject(project)} />
            ))}
            {selectedProject && <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />}
        </section>
    );
}