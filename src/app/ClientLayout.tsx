'use client'

import { Header } from '@/components/Header'
import I18Provider from '@/components/I18nProvider'
import { MouseEffect } from '@/components/MouseEffect'
import { Sidebar } from '@/components/Sidebar'
import { useEffect, useState } from 'react'

export default function ClientLayout({
    children,
    locale,
}: {
    children: React.ReactNode
    locale: string
}) {
    const [isClient, setIsClient] = useState(false)


    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) return <></>

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