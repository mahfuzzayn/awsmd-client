"use client"

import { useEffect, useRef } from "react"

const Cursor = () => {
    const cursorRef = useRef<HTMLDivElement | null>(null)
    const mouse = useRef({ x: -100, y: -100 })
    const cursor = useRef({ x: -100, y: -100 })
    const rafId = useRef<number | null>(null)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            mouse.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
            cursor.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
        }

        const lerp = (start: number, end: number, factor: number) => {
            return start + (end - start) * factor
        }

        const animate = () => {
            if (cursorRef.current) {
                cursor.current.x = lerp(cursor.current.x, mouse.current.x, 0.15)
                cursor.current.y = lerp(cursor.current.y, mouse.current.y, 0.15)

                const x = cursor.current.x
                const y = cursor.current.y
                
                cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
            }
            rafId.current = requestAnimationFrame(animate)
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY }
        }

        const handleMouseOver = (e: MouseEvent) => {
            if (!cursorRef.current) return
            
            const target = e.target as HTMLElement
            const isLink = target.tagName === "A" || 
                           target.tagName === "BUTTON" || 
                           target.closest("a") || 
                           target.closest("button") ||
                           target.classList.contains("cursor-hover")

            if (isLink) {
                cursorRef.current.style.width = "7px"
                cursorRef.current.style.height = "7px"
                cursorRef.current.style.marginLeft = "3px"
                cursorRef.current.style.marginTop = "3px"
            } else {
                cursorRef.current.style.width = "10px"
                cursorRef.current.style.height = "10px"
                cursorRef.current.style.opacity = "1"
                cursorRef.current.style.marginLeft = "0px"
                cursorRef.current.style.marginTop = "0px"
            }
        }

        const handleMouseLeave = () => {
            if (cursorRef.current) {
                cursorRef.current.style.opacity = "0"
            }
        }

        const handleMouseEnter = () => {
            if (cursorRef.current) {
                cursorRef.current.style.opacity = "1"
            }
        }

        animate()

        window.addEventListener("mousemove", handleMouseMove, { passive: true })
        document.addEventListener("mouseover", handleMouseOver, { passive: true })
        document.addEventListener("mouseleave", handleMouseLeave)
        document.addEventListener("mouseenter", handleMouseEnter)

        return () => {
            if (rafId.current) cancelAnimationFrame(rafId.current)
            window.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseover", handleMouseOver)
            document.removeEventListener("mouseleave", handleMouseLeave)
            document.removeEventListener("mouseenter", handleMouseEnter)
        }
    }, [])

    return (
        <div
            ref={cursorRef}
            className="cursor hidden lg:block fixed w-2.5 h-2.5 bg-primary rounded-full pointer-events-none z-9999"
            style={{
                left: -5,
                top: -5,
                transition: "width 0.3s ease, height 0.3s ease, opacity 0.3s ease, margin 0.3s ease",
                willChange: "transform, width, height"
            }}
        />
    )
}

export default Cursor