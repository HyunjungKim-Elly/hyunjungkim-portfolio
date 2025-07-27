'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export const useHash = () => {
    const pathname = usePathname()
    const [hash, setHash] = useState<string>('')

    useEffect(() => {
        const updateHash = () => {
            const hash = pathname.split('/')[1]
            setHash(hash)
        }
        updateHash()

        window.addEventListener('hashchange', updateHash)
        return () => window.removeEventListener('hashchange', updateHash)
    }, [])

    return hash
}