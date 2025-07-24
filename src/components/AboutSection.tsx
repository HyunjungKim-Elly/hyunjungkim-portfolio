import { ReactNode } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiNestjs, SiGraphql, SiPostman, SiVite, SiTailwindcss } from "react-icons/si";

export interface Skill {
    icon: React.ReactNode;
    name: string;
  }
  
  export const skills: Skill[] = [
    {
      icon: <FaReact className="text-sky-400 w-6 h-6" />,
      name: "React",
    },
    {
      icon: <SiTypescript className="text-blue-500 w-6 h-6" />,
      name: "TypeScript",
    },
    {
      icon: <SiNextdotjs className="text-black dark:text-white w-6 h-6" />,
      name: "Next.js",
    },
    {
      icon: <FaNodeJs className="text-green-600 w-6 h-6" />,
      name: "Node.js",
    },
    {
      icon: <SiNestjs className="text-red-500 w-6 h-6" />,
      name: "NestJS",
    },
    {
      icon: <SiGraphql className="text-pink-500 w-6 h-6" />,
      name: "GraphQL",
    },
    {
      icon: <SiPostman className="text-orange-500 w-6 h-6" />,
      name: "REST API",
    },
    {
      icon: <SiTailwindcss className="text-sky-500 w-6 h-6" />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiVite className="text-purple-400 w-6 h-6" />,
      name: "Vite",
    },
    {
      icon:  <span className="text-xl">🐻</span>,
      name: "Zustand",
    },
  ];

export const AboutSection = () => {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto" id="about">
      <h2 className="text-3xl font-bold mb-6">소개</h2>
      <p className="text-lg mb-8 leading-relaxed">
        안녕하세요. React와 Next.js를 중심으로 프론트엔드와 백엔드 모두를 경험해온 웹 개발자입니다.
        스타트업 환경에서 커머스, 커뮤니티, 이벤트 플랫폼을 직접 설계하고 구현하며, 실제 사용자 중심의
        서비스를 만들어왔습니다. NestJS와 GraphQL 기반의 백엔드 모듈 개발도 함께 경험하며, 프론트와 백엔드를
        아우르는 실무 역량을 갖추고 있습니다.
      </p>
      <h3 className="text-2xl font-semibold mb-4">주요 기술 스택</h3>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <li key={skill.name} className="flex items-center gap-2 text-lg">
            <span className="text-xl">{skill.icon}</span>
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutSection;