'use client'

import I18Provider from '@/components/I18nProvider'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { MouseEffect } from '@/components/MouseEffect'

export default function ClientLayout({
    children,
    locale,
}: {
    children: React.ReactNode
    locale: string
}) {
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