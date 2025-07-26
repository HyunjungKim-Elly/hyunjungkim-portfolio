import { Geist, Geist_Mono } from 'next/font/google'
import type { Metadata } from 'next'
import ClientLayout from './ClientLayout'
import { i18n } from '../../../next-i18next.config'

import '@/styles/globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Hyunjung Kim',
  description: "Hyunjung Kim's Portfolio",
}

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export default async function CommonLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <>
      <ClientLayout locale={locale}>{children}</ClientLayout>
    </>
  )
}