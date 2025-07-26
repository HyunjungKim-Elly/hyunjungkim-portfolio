'use client'

import I18Provider from '@/components/I18nProvider'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { MouseEffect } from '@/components/MouseEffect'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ClientLayout({
    children,
    locale,
}: {
    children: React.ReactNode
    locale: string
}) {
    const router = useRouter()
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        if (!locale) {
            router.push('/ko')
        }
    }, [locale, router])

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) return null

    return (
        <I18Provider locale={locale}>
            <div className="ml-150">
                <Header />
                <Sidebar />
                {children}
                <MouseEffect />
            </div>
        </I18Provider>
    )
}