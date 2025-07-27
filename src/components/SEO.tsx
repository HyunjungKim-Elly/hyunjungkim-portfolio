import Head from "next/head"

export const SEO = () => {
    return (
        <Head>
            <title>김현정 Hyunjung Kim – 프론트엔드 개발자</title>
            <meta name="description" content="React/Next.js 기반 프론트엔드 개발자 김현정의 포트폴리오입니다." />
            <meta property="og:title" content="김현정 – 프론트엔드 포트폴리오" />
            <meta property="og:description" content="스타트업에서 다년간 다양한 실무 경험을 가진 프론트엔드 개발자입니다." />
            <meta property="og:image" content="https://hyunjungkim-portfolio.vercel.app/cat.png" />
            <meta property="og:url" content="https://hyunjungkim-portfolio.vercel.app/" />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    )
}