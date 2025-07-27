import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export const useHash = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [hash, setHash] = useState('')



    useEffect(() => {
        setHash(window.location.hash)
    }, [pathname, searchParams])

    return hash
}