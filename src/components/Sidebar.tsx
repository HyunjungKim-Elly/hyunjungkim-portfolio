import Image from "next/image";

export const Sidebar = () => {
    return (
        <aside className="pt-18 w-150 h-screen fixed left-0 top-0 p-6 border-r border-gray-200 bg-gray-100 dark:bg-gray-900 ">
            <div className="flex flex-col gap-4 h-full pl-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="text-[3.2rem] font-extrabold">Hyunjung Kim</div>
                    {/* <Image src="/cat.png" alt="profile" width={38} height={38} /> */}
                </div>
                <h2 className="text-sm font-bold text-gray-500">Web Developer</h2>
                <p className="text-sm text-gray-500 leading-snug mb-8">
                    I specialize in building user-friendly frontends with React,<br />
                    and have practical experience with backend APIs using Node.js & NestJS.
                </p>
                <ul className="flex flex-col gap-6 text-gray-600 text-lg font-semibold">
                    {[
                        { id: 'about', label: 'ABOUT' },
                        { id: 'experience', label: 'EXPERIENCE' },
                        { id: 'projects', label: 'PROJECTS' },
                    ].map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                className="group flex items-center gap-3 transition-all"
                            >
                                {/* 왼쪽 네모 라인 */}
                                <span
                                    className="h-[0.15rem] w-4 bg-gray-400 group-hover:w-12 transition-all duration-300 rounded-full"
                                />
                                {/* 메뉴 텍스트 */}
                                <span className="text-gray-700 group-hover:text-black text-sm">{item.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};