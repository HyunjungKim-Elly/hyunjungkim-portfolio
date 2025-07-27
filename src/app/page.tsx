'use client'
import { useEffect } from 'react'
import { redirect, usePathname } from 'next/navigation'

export default function RedirectPage() {
    const pathname = usePathname()

    useEffect(() => {
        if (pathname === '/') {
            redirect(`/ko`)
        } else {
            redirect(`/en`)
        }
    }, [pathname])
}