"use client"

import { createContext, useContext, useEffect, useRef } from 'react'
import Lenis from 'lenis'

interface LenisContextType {
  lenis: Lenis | null
}

const LenisContext = createContext<LenisContextType>({ lenis: null })

interface LenisProviderProps {
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
}

export const LenisProvider = ({ children, options = {} }: LenisProviderProps) => {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const defaultOptions = {
      duration: 2,
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

    lenisRef.current = new Lenis(defaultOptions)

    function raf(time: number) {
      lenisRef.current?.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenisRef.current?.destroy()
      lenisRef.current = null
    }
  }, [options])

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </LenisContext.Provider>
  )
}

export const useLenis = () => {
  const context = useContext(LenisContext)
  if (!context) {
    throw new Error('useLenis must be used within a LenisProvider')
  }
  return context.lenis
}

export default LenisProvider