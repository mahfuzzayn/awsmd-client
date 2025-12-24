"use client"

import { useEffect, useRef } from "react"

const Cursor = () => {
    const cursorRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (cursorRef.current) {
                if (e.target?.tagName === "A") {
                    cursorRef.current.style.scale = "0.7";
                    cursorRef.current.style.transform = `${e.clientY - 5}px ${e.clientX - 5}px`;
                } else if (e.target?.tagName !== "A") {
                    cursorRef.current.style.scale = "1.0";
                    cursorRef.current.style.translate = `${e.clientY - 5}px ${e.clientX - 5}px`;
                }
            }
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, [])

    return (
        <div ref={cursorRef} className="cursor w-2.5 h-2.5 bg-primary absolute z-100 rounded-full transform duration-100 ease-in-out pointer-events-none"></div>
    )
}

export default Cursor