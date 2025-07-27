'use client'

import { useHash } from "@/hooks/useHarsh";
import LanguageToggle from "./LanguageToggle";
import { useWindowSize } from "@/hooks/useWindowSize";
import Link from "next/link";

export const Header = () => {
    const { isSm, isMd } = useWindowSize()

    const menuItems = [
        { id: 'about', label: 'ABOUT' },
        { id: 'experience', label: 'EXPERIENCE' },
        { id: 'projects', label: 'PROJECTS' },
    ]

    const hash = useHash();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-end items-center px-6 py-4 w-full bg-black/50 lg:bg-transparent">
            {(isSm || isMd) && (
                <ul className="flex gap-6 text-gray-200 text-lg font-semibold px-6 w-full">
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <Link
                                href={`#${item.id}`}
                                className="group flex items-center gap-3 transition-all cursor-pointer hover:text-white"
                            >
                                {/* 메뉴 텍스트 */}
                                <span className={`text-gray-500 group-hover:text-white text-sm ${`#${item.id}` === hash ? 'text-white' : 'text-gray-500'}`}>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            <LanguageToggle />
        </header>
    )
}