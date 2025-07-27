import { Geist, Geist_Mono } from 'next/font/google'
import '@/styles/globals.css'
import '../../output.css'


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
export default async function RootLayout({ children, params }: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {

  const { locale } = await params


  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}

export const metadata = {
  title: 'Hyunjung Kim Portfolio',
  description: 'React/Next.js 기반 프론트엔드 개발자 김현정의 포트폴리오입니다.',
  openGraph: {
    title: 'Hyunjung Kim Portfolio',
    description: '스타트업에서 3년간 다양한 실무 경험을 가진 프론트엔드 개발자입니다.',
    url: 'https://hyunjungkim-portfolio.vercel.app/',
    siteName: 'Hyunjung Kim Portfolio',
    images: [
      {
        url: 'https://hyunjungkim-portfolio.vercel.app/cat.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
}