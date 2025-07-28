'use client'
import { useEffect } from 'react'

const sectionIds = ['about', 'experience', 'projects']

export const useScrollHashUpdater = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id
                        history.replaceState(null, '', `#${id}`)
                    }
                })
            },
            {
                threshold: 0.5, // 화면의 절반 이상 보이면 hash 반영
            }
        )

        sectionIds.forEach((id) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => {
            sectionIds.forEach((id) => {
                const el = document.getElementById(id)
                if (el) observer.unobserve(el)
            })
        }
    }, [])

    return null
}