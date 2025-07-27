import React from "react";
import { useTranslation } from "react-i18next";

export const ExperienceSection = () => {
    const { t } = useTranslation();

    const enumaTechs = ['React', 'Zustand', 'TypeScript', 'Tailwind CSS', 'SWR', 'SCSS'];
    const epilTechs = ['React', 'Next.js', 'Zustand', 'TypeScript', 'Tailwind CSS', 'SWR', 'SCSS', 'Nest.js', 'GraphQL', 'TypeORM', 'GitHub Actions'];
    const technobellyTechs = ['React', 'Swift', 'HTML', 'JS'];

    return (
        <section className="px-6 mt-20 flex flex-col justify-start w-full" id="experience">
            <h2 className="text-3xl font-bold mb-6">Experience</h2>

            <div className="mb-12">
                <h3 className="text-xl font-semibold">에누마</h3>
                <p className="text-sm text-gray-500 mb-1">{`2024.05 - ${t('common_currently_working')} (1 ${t('common_year')} 3 ${t('common_month')}) ｜ ${t('common_fulltime')} ｜ ${t('common_frontend')}`}</p>
                {Array.from({ length: 4 }).map((_, index) => (
                    <p className="text-sm leading-relaxed" key={index}>
                        {t(`experience_enuma_description_${index + 1}`)}
                    </p>

                ))}
                <div className="flex flex-wrap gap-2 mt-4">
                    {enumaTechs.map((tech) => (
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
                <p className="text-sm text-gray-500 mb-1">{`2021.03 - 2024.05 (3 ${t('common_year')} 3 ${t('common_month')}) ｜ ${t('common_fulltime')} ｜ ${t('common_fullstack')}, ${t('common_service_po')}`}</p>
                {Array.from({ length: 4 }).map((_, index) => (
                    <p className="text-sm leading-relaxed" key={index}>
                        {t(`experience_epil_description_${index + 1}`)}
                    </p>
                ))}
                <div className="flex flex-wrap gap-2 mt-4">
                    {epilTechs.map((tech) => (
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
                <p className="text-sm text-gray-500 mb-1">{`2020.07 - 2021.03 (9 ${t('common_month')}) ｜ ${t('common_fulltime')} ｜ ${t('common_web_frontend')}`}</p>
                {Array.from({ length: 3 }).map((_, index) => (
                    <p className="text-sm leading-relaxed" key={index}>
                        {t(`experience_technobelly_description_${index + 1}`)}
                    </p>
                ))}
                <div className="flex flex-wrap gap-2 mt-4">
                    {technobellyTechs.map((tech) => (
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