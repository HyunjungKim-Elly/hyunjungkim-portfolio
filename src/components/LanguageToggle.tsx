'use client'

import { useTranslation } from 'next-i18next'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function LanguageToggle() {
    const router = useRouter()
    const pathname = usePathname()
    const { i18n, t } = useTranslation()

    // 클라이언트에서만 nextLocale을 계산
    const [nextLocale, setNextLocale] = useState<'en' | 'ko' | undefined>()
    const [currentLocale, setCurrentLocale] = useState<'en' | 'ko' | undefined>()


    useEffect(() => {
        if (currentLocale) {
            i18n.changeLanguage(currentLocale)
            router.replace(`/${currentLocale}`)
        }
    }, [currentLocale])

    useEffect(() => {
        if (pathname.split('/')[1] === 'en' || pathname.split('/')[1] === 'ko') {
            setCurrentLocale(pathname.split('/')[1] as 'en' | 'ko')
        } else {
            setCurrentLocale(undefined)
        }
    }, [pathname])


    useEffect(() => {
        if (i18n.language === 'en') {
            setNextLocale('ko')
        } else if (i18n.language === 'ko') {
            setNextLocale('en')
        }
    }, [i18n.language])

    const handleClick = () => {
        i18n.changeLanguage(nextLocale)
        setCurrentLocale(nextLocale)
    }

    return (
        <button
            onClick={handleClick}
            className="text-sm font-medium underline text-gray-400 hover:text-white transition-colors"
        >
            {t('switchTo')} {nextLocale?.toUpperCase()}
        </button>
    )
}