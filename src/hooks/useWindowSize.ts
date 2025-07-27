import { useState, useEffect } from 'react'

export const useWindowSize = () => {
    const [size, setSize] = useState({ width: 0, height: 0 })
    const [isSm, setIsSm] = useState(false)
    const [isMd, setIsMd] = useState(false)
    const [isLg, setIsLg] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setSize({ width: window.innerWidth, height: window.innerHeight })
            setIsSm(window.innerWidth < 768)
            setIsMd(window.innerWidth >= 768 && window.innerWidth < 1024)
            setIsLg(window.innerWidth >= 1024)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return { size, isSm, isMd, isLg }
}