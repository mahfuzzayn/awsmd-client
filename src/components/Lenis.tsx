"use client"

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import clsx from 'clsx'

interface LenisScrollProps {
    children: React.ReactNode
    options?: {
        duration?: number
        easing?: (t: number) => number
        direction?: 'vertical' | 'horizontal'
        gestureDirection?: 'vertical' | 'horizontal' | 'both'
        smooth?: boolean
        mouseMultiplier?: number
        smoothTouch?: boolean
        touchMultiplier?: number
        infinite?: boolean
    }
    className?: string
}

const LenisScroll = ({ children, options = {}, className = '' }: LenisScrollProps) => {
    const lenisRef = useRef<Lenis | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Default options for smooth scrolling
        const defaultOptions = {
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical' as const,
            gestureDirection: 'vertical' as const,
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
            ...options
        }

        // Initialize Lenis
        lenisRef.current = new Lenis(defaultOptions)

        // Animation frame function
        function raf(time: number) {
            lenisRef.current?.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        // Cleanup function
        return () => {
            lenisRef.current?.destroy()
            lenisRef.current = null
        }
    }, [options])

    return (
        <div ref={containerRef} className={clsx("lenis", className)}>
            {children}
        </div>
    )
}

export default LenisScroll