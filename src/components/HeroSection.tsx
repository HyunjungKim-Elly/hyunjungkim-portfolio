
const HeroSection = () => {
    return (
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hyunjung Kim</h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
          Fullstack Web Developer
        </p>
        <p className="max-w-xl text-gray-500 dark:text-gray-400 mb-8">
          React, Next.js, Nest.js 기반으로 실서비스를 설계하고 구현해온 개발자입니다.
        </p>
        <div className="flex gap-4">
          <a
            href="/Hyunjung_Kim_Resume.pdf"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            이력서 보기
          </a>
          <a
            href="#projects"
            className="border border-black text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition dark:border-white dark:text-white dark:hover:bg-white/10"
          >
            프로젝트 보기
          </a>
        </div>
      </section>
    );
  };
  
  export default HeroSection;