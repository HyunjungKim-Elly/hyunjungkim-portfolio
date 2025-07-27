'use client'

import { useHash } from "@/hooks/useHarsh";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { SocialSidebar } from "./SocialBar";
import { useWindowSize } from "@/hooks/useWindowSize";

export const Sidebar = () => {
    const { t, ready } = useTranslation()
    const { isSm, isMd, isLg } = useWindowSize()

    const hash = useHash();

    const menuItems = [
        { id: 'about', label: 'ABOUT' },
        { id: 'experience', label: 'EXPERIENCE' },
        { id: 'projects', label: 'PROJECTS' },
    ]
    return (
        <>
            {isLg && <aside className="pt-18 w-150 h-screen fixed left-0 top-0">
                <div className="flex flex-col gap-4 h-full pl-10">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="text-[3.2rem] font-extrabold">Hyunjung Kim</div>
                        {/* <Image src="/cat.png" alt="profile" width={38} height={38} className="bg-white rounded-full" /> */}
                    </div>
                    <h2 className="text-sm font-bold text-gray-200">Web Developer</h2>
                    <p className="text-sm text-gray-200 leading-snug mb-8 w-120">
                        {t('sidebar_desc')}
                    </p>
                    <ul className="flex flex-col gap-6 text-gray-200 text-lg font-semibold">
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={`#${item.id}`}
                                    className="group flex items-center gap-3 transition-all"
                                >
                                    {/* 왼쪽 네모 라인 */}
                                    <span
                                        className={`h-[0.15rem] group-hover:w-12 transition-all duration-300 rounded-full group-hover:bg-white ${`#${item.id}` === hash ? 'bg-white w-12' : 'bg-gray-600 w-4'}`}
                                    />
                                    {/* 메뉴 텍스트 */}
                                    <span className={`text-gray-500 group-hover:text-white text-sm ${`#${item.id}` === hash ? 'text-white' : 'text-gray-500'}`}>{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <SocialSidebar />
                </div>
            </aside>}
        </>
    );
};