'use client'

import { useState } from 'react'
import { ProjectModal } from './ProjectModal'
import { ProjectCard } from './ProjectCard'

export interface Project {
    title: string
    year: number
    description: string
    image: string
    link?: string
    projectItem?: ProjectItem
}
export interface ProjectItem {
    title: string
    year: number
    description: string
    techStack: string[]
    contribution: string
    image: string
    images: string[]
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
        year: 2024,
        image: "/images/enuma_landing.png",
        description: "Vue2 기반 레거시를 React + Zustand + Tailwind로 리팩토링",
        projectItem: {
            title: 'Enuma School 소개 사이트 리팩토링',
            year: 2024,
            description:
                '기존 Vue 기반의 정적 페이지를 React + Zustand + Tailwind로 리팩토링하여 성능과 유지보수성을 향상시켰습니다. API 연동이 없는 단순 구조였지만, 컴포넌트화와 폴더 구조 재정리를 통해 향후 확장 가능성을 고려해 구현하였습니다.',
            techStack: ['React', 'Zustand', 'Tailwind CSS'],
            contribution: '프론트엔드 100% 단독 구현',
            image: '/images/projects/enuma-school-landing.png',
            images: ['/images/enuma_landing.png'],
        },
    },
    {
        title: "AIDT 교과서 대시보드 개발",
        year: 2024,
        image: "/images/aidt_dashboard.png",
        description: "학습자 데이터 시각화 대시보드 개발",
        projectItem: {
            title: 'AIDT 교과서 대시보드 개발',
            year: 2024,
            description:
                '학습자 데이터를 시각화해 교사와 관리자가 학습 현황을 쉽게 파악할 수 있도록 한 대시보드입니다. 각종 차트와 표, 지표 위젯을 구성하였고, 유저 타입별 인터페이스도 분리 설계했습니다.',
            techStack: ['React', 'Zustand', 'Tailwind CSS', 'Recharts'],
            contribution: '프론트엔드 100% 단독 구현',
            image: '/images/projects/aidt-dashboard.png',
            images: ['/images/aidt_dashboard.png'],
        },
    },
    {
        title: "Enuma School LMS 리팩토링",
        year: 2023,
        image: "/images/enumaschool_lms.png",
        description: "Vue2 기반 레거시를 React + Zustand + Tailwind로 리팩토링",
        projectItem: {
            title: 'Enuma School LMS 리팩토링',
            year: 2023,
            description:
                'Vue 기반 레거시 학습관리시스템(LMS)을 React로 리팩토링하여 구조 개선 및 디자인 시스템 도입을 진행했습니다. 유지보수가 어렵던 페이지를 컴포넌트 기반으로 분리하고, 교사/학습자/관리자 각각의 흐름에 맞춘 화면을 재설계했습니다.',
            techStack: ['React', 'Zustand', 'Tailwind CSS'],
            contribution: '프론트엔드 단독 리팩토링',
            image: '/images/projects/enuma-lms.png',
            images: ['/images/enumaschool_lms.png'],
        },
    },
    {
        title: "멍냥마켓",
        year: 2023,
        image: "/images/market_main.png",
        description: "이커머스 전용 상품 옵션 UI 개선 및 주문 흐름 설계",
        projectItem: {
            title: '멍냥마켓 (이커머스)',
            year: 2023,
            description:
                '반려동물 전용 이커머스 서비스. 상품 옵션 조합 알고리즘과 장바구니(+1), 주문 흐름을 구현하였으며, 배송지 관리 및 초기 구조 설계를 주도하였습니다.',
            techStack: ['Vue 2', 'Vuex', 'SCSS', 'JavaScript'],
            contribution: '프론트엔드 약 40% (초기 구조 설계 및 핵심 기능)',
            image: '/images/projects/mongnyang-market.png',
            images: ['/images/market_main.png', '/images/market_ad.png', '/images/market_cart.png', '/images/market_address.png'],
        },
    },
    {
        title: "멍냥보감 웹 커뮤니티",
        year: 2021,
        image: "/images/community_main.png",
        description: "펫 콘텐츠 기반 큐레이션 서비스 초기 기획 및 MVP 개발",
        projectItem: {
            title: '멍냥보감 웹 커뮤니티 (백엔드)',
            year: 2021,
            description:
                '기존 Node/Express로 구축된 백엔드를 Nest.js로 마이그레이션하며 구조화하고, 외부 API 연동 및 인증/보안 로직을 추가해 안정성을 확보했습니다.',
            techStack: ['Nest.js', 'TypeORM', 'Node.js'],
            contribution: '백엔드 100% 단독 구현',
            image: '/images/projects/mongnyang-community.png',
            images: ['/images/community_main.png', '/images/community_articles.png', '/images/community_food.png'],
        },
    },
    {
        title: "HR 통합 관리 시스템 개발",
        year: 2021,
        image: "/images/hr_register.png",
        description: "HR 통합 관리 시스템 개발",
        projectItem: {
            title: 'HR 매니지먼트',
            year: 2021,
            description:
                '재직 중이던 학교 과제로 제작한 인사관리 시스템. 직원 정보, 출퇴근 관리, 연차 관리 등 기능이 포함되어 있으며, 프론트엔드/백엔드 모두 직접 개발했습니다.',
            techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
            contribution: '100% 개인 개발',
            image: '/images/projects/hr-management.png',
            images: ['/images/hr_register.png', '/images/hr_add.png', '/images/hr_department.png'],
        },
    },
];
export const ProjectSection = () => {

    const [selectedProject, setSelectedProject] = useState<Project['projectItem'] | null>(null)

    return (
        <section id="projects" className="my-20 space-y-6 px-6 w-full">
            <h2 className="text-3xl font-bold">Projects</h2>
            {projects.map((project, idx) => (
                <ProjectCard year={project.year} image={project.image} description={project.description} title={project.title} key={idx} onClick={() => setSelectedProject(project.projectItem)} />
            ))}
            {selectedProject && <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />}
        </section>
    );
}