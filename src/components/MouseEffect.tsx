'use client'

import { useEffect, useRef } from 'react'

export const MouseEffect = () => {
    const glowRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e
            if (glowRef.current) {
                glowRef.current.style.left = `${clientX}px`
                glowRef.current.style.top = `${clientY}px`
            }
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div
            ref={glowRef}
            className="fixed pointer-events-none z-[-1] w-140 h-140 rounded-full blur-[10rem] opacity-30 bg-blue-500"
            style={{
                transform: 'translate(-50%, -50%)',
            }}
        />
    )
}