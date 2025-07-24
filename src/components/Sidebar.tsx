export const Sidebar = () => {
    return (
        <aside className="w-150 h-screen fixed left-0 top-0 p-6 bg-white border-r border-gray-200">
            <div className="flex flex-col gap-4 justify-center h-full pl-10">
                <div className="text-4xl font-bold mb-4">Hyunjung Kim</div>
                <p className="mt-2 text-sm text-gray-500 leading-snug">
                    React 기반의 프론트엔드를 중심으로<br />
                    Node.js와 NestJS 백엔드 경험까지 갖춘 실전형 웹 개발자입니다.
                </p>
                <div className="flex flex-col gap-4 text-gray-600">
                    <a href="#about" className="hover:text-black">About</a>
                    <a href="#experience" className="hover:text-black">Experience</a>
                    <a href="#projects" className="hover:text-black">Projects</a>
                </div>
            </div>
        </aside>
    );
};