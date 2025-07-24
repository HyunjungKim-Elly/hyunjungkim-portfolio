import React from "react";

export const ExperienceSection = () => {
    return (
        <section className="px-6 max-w-4xl mt-20" id="experience">
            <h2 className="text-3xl font-bold mb-6">Experience</h2>

            <div className="mb-12">
                <h3 className="text-xl font-semibold">에누마</h3>
                <p className="text-sm text-gray-500 mb-1">2024.05 - 재직 중 (1년 3개월) ｜ 정규직 ｜ 프론트엔드 개발</p>
                <p className="text-sm leading-relaxed mb-2">
                    • 기존 Vue2 기반의 내부 LMS 관리자 페이지를 React 기반으로 전면 리팩토링하며 구조 및 유지보수성 개선<br />
                    • Zustand 기반 상태 관리 도입, SCSS 모듈화 및 폴더 구조 리팩토링 등 아키텍처 전반 개선<br />
                    • 디지털 교과서 사용 기능, 마크업/교사 응답 처리 등 신규 기능을 팀원과 협업하여 개발<br />
                    • 월간 이벤트 기능을 단독으로 기획·개발해 참여자 수 10배 증가(MAU 6만)를 이끈 실질적 성과 경험
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {['React', 'Zustand', 'TypeScript', 'Tailwind CSS', 'SWR', 'SCSS'].map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-3 py-1 rounded-full bg-[#1f2937] text-white"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mb-12">
                <h3 className="text-xl font-semibold">에필</h3>
                <p className="text-sm text-gray-500 mb-1">2021.03 - 2024.05 (3년 3개월) ｜ 정규직 ｜ 풀스택 개발, 서비스개발 PO</p>
                <p className="text-sm leading-relaxed mb-2">
                    • 멍냥보감 웹 커뮤니티 신규 개발: Node.js/Nest.js 백엔드 + 외부 서버 통신 처리 + SNS 로그인 처리 등<br />
                    • e-commerce 쇼핑몰 ‘멍냥마켓’ 프론트엔드 구조 설계부터 UI 구현까지 담당, monorepo 구성 운영<br />
                    • 이벤트 기능 및 인증 시스템 고도화, 사용자 중심의 옵션 선택 UX 개선<br />
                    • GraphQL, TypeORM, GitHub Actions 활용 자동화된 배포 경험 등 전체 개발 사이클 경험
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {['React', 'Next.js', 'Zustand', 'TypeScript', 'Tailwind CSS', 'SWR', 'SCSS', 'Nest.js', 'GraphQL', 'TypeORM', 'GitHub Actions'].map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-3 py-1 rounded-full bg-[#1f2937] text-white"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mb-12">
                <h3 className="text-xl font-semibold">테크노밸리컴퍼니</h3>
                <p className="text-sm text-gray-500 mb-1">2020.07 - 2021.03 (9개월) ｜ 정규직 ｜ 웹/프론트엔드 개발</p>
                <p className="text-sm leading-relaxed">
                    • 마사지 소개 앱 관련 프론트엔드 개발 및 데이터 파싱 업무<br />
                    • Swift/HTML/JS 기반 앱 등록 및 모바일 사이트 제작<br />
                    • React 기반으로 회사 PC/모바일 전용 웹사이트 개발 경험 확보
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {['React', 'Swift', 'HTML', 'JS'].map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-3 py-1 rounded-full bg-[#1f2937] text-white"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;