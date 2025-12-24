"use client"

import { useEffect, useRef } from "react"

const Cursor = () => {
    const cursorRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        // Set initial cursor position to center of screen
        if (cursorRef.current && typeof window !== 'undefined') {
            cursorRef.current.style.transform = `translate(${window.innerWidth / 2}px, ${window.innerHeight / 2}px)`;
        }

        const handleMouseMove = (e: MouseEvent) => {
            if (cursorRef.current) {
                const target = e.target as HTMLElement;
                const isLink = target?.tagName === "A" || target?.closest("a");
                
                if (isLink) {
                    cursorRef.current.style.scale = "0.7";
                } else {
                    cursorRef.current.style.scale = "1.0";
                }
                
                cursorRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
            }
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, [])

    return (
        <div 
            ref={cursorRef} 
            className="cursor fixed w-2.5 h-2.5 bg-primary rounded-full pointer-events-none transition-transform duration-100 ease-in-out z-50"
            style={{ 
                left: 0, 
                top: 0
            }}
        />
    )
}

export default Cursor