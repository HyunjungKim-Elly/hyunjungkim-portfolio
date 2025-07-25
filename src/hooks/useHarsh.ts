'use client'
import { useEffect, useState } from 'react'

export const useHash = () => {
    const [hash, setHash] = useState<string>('')

    useEffect(() => {
        const updateHash = () => setHash(window.location.hash)
        updateHash()

        window.addEventListener('hashchange', updateHash)
        return () => window.removeEventListener('hashchange', updateHash)
    }, [])

    return hash
}