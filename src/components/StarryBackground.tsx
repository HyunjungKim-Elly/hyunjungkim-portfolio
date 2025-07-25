'use client' // Next.js App Router 쓰면 반드시 필요

import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import type { Engine } from 'tsparticles-engine'

export const StarryBackground = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine)
    }, [])

    return (
        <>
            <div className="absolute inset-0 -z-10 bg-gradient-radial" />
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        color: '#000',
                    },
                    fullScreen: {
                        enable: true,
                        zIndex: -1,
                    },
                    particles: {
                        number: { value: 100 },
                        size: { value: 1 },
                        color: { value: '#fff' },
                        move: { enable: true, speed: 0.3 },
                    },
                }}
            />
        </>
    )
}