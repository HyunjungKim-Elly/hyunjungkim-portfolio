'use client'

import { useTranslation } from 'next-i18next'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function LanguageToggle() {
    const router = useRouter()
    const pathname = usePathname()
    const { i18n, t } = useTranslation()

    // 클라이언트에서만 nextLocale을 계산
    const [nextLocale, setNextLocale] = useState<'en' | 'ko'>('en')

    useEffect(() => {
        if (i18n.language === 'en') {
            setNextLocale('ko')
        } else {
            setNextLocale('en')
        }
    }, [i18n.language])

    const handleClick = () => {
        const newPath = pathname.includes('ko') ? '/en' : '/ko'

        i18n.changeLanguage(nextLocale)
        router.push(newPath)
    }

    return (
        <button
            onClick={handleClick}
            className="text-sm font-medium underline text-gray-400 hover:text-white transition-colors"
        >
            {t('switchTo')} {nextLocale.toUpperCase()}
        </button>
    )
}