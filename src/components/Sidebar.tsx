import Image from "next/image";

export const Sidebar = () => {
    return (
        <aside className="pt-20 w-150 h-screen fixed left-0 top-0 p-6 border-r border-gray-200 bg-gray-100 dark:bg-gray-900 ">
            <div className="flex flex-col gap-4 h-full pl-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl font-extrabold">Hyunjung Kim</div>
                    {/* <Image src="/cat.png" alt="profile" width={38} height={38} /> */}
                </div>
                <h2 className="text-sm font-bold text-gray-500">Web Developer</h2>
                <p className="text-sm text-gray-500 leading-snug mb-8">
                    I specialize in building user-friendly frontends with React,<br />
                    and have practical experience with backend APIs using Node.js & NestJS.
                </p>
                <div className="flex flex-col gap-4 text-gray-600 font-bold">
                    <a href="#about" className="hover:text-black">About</a>
                    <a href="#experience" className="hover:text-black">Experience</a>
                    <a href="#projects" className="hover:text-black">Projects</a>
                </div>
            </div>
        </aside>
    );
};