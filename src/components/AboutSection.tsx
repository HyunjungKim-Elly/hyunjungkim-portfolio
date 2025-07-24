import { ReactNode } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiNestjs, SiGraphql, SiPostman, SiVite, SiTailwindcss } from "react-icons/si";

export interface Skill {
    icon: React.ReactNode;
    name: string;
}

const skills: Skill[] = [
    { icon: <FaReact className="text-sky-500" />, name: "React" },
    { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
    { icon: <SiNextdotjs className="text-black" />, name: "Next.js" },
    { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
    { icon: <SiNestjs className="text-red-500" />, name: "NestJS" },
    { icon: <SiGraphql className="text-pink-500" />, name: "GraphQL" },
    { icon: <SiPostman className="text-orange-500" />, name: "REST API" },
    { icon: <span className="text-xl">🐻</span>, name: "Zustand" },
    { icon: <SiVite className="text-purple-500" />, name: "Vite" },
    { icon: <SiTailwindcss className="text-blue-500" />, name: "TailwindCSS" },
];

export const AboutSection = () => {
    return (
        <section className="px-6 max-w-4xl mx-auto" id="about">
            <h2 className="text-3xl font-bold mb-6">About</h2>
            <p className="text-sm mb-8 leading-relaxed">
                저는 React와 Next.js를 기반으로 사용자 경험을 고민하며 웹 서비스를 개발해온 프론트엔드 개발자입니다.
                3년간 스타트업에서 커머스, 이벤트, 커뮤니티 플랫폼 등 다양한 서비스를 직접 설계하고 구현했으며,
                프론트엔드뿐 아니라 Nest.js와 GraphQL을 활용한 백엔드 모듈 개발까지 폭넓게 경험했습니다.

                실제 사용자 흐름을 이해하고, 필요한 기능을 처음부터 끝까지 주도적으로 설계·구현해본 경험이 많습니다.
                디자인 시스템을 도입해 팀 전체의 UI 일관성을 높였고, Zustand 기반의 상태 관리와 SSR/CSR 구조 설계를 통해
                더 빠르고 안정적인 사용자 경험을 만드는 데 집중해왔습니다.

                백엔드 개발자로서도 다양한 프로젝트에 참여해왔습니다.
                API 설계부터 외부 시스템 연동, 서버 마이그레이션까지 다양한 영역을 경험했으며,
                이벤트 기능을 단독으로 기획하고 구현해 월간 사용자 수(MAU)를 10배 이상 끌어올린 경험도 있습니다.

                현재는 더 넓은 환경에서 협업하고 성장할 수 있는 개발자로 도약하고자 포트폴리오를 정리하고 있습니다.
            </p>
            <h3 className="text-2xl font-bold mb-4">Skills</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill) => (
                    <li key={skill.name} className="flex items-center gap-2 text-sm">
                        {skill.icon}
                        {skill.name}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default AboutSection;