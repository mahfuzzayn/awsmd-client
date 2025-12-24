"use client"

import { useEffect, useRef } from "react"

const Cursor = () => {
    const cursorRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (cursorRef.current && typeof window !== 'undefined') {
            cursorRef.current.style.transform = `translate(${window.innerWidth / 2}px, ${window.innerHeight / 2}px)`;
        }

        const handleMouseMove = (e: MouseEvent) => {
            if (cursorRef.current) {
                const target = e.target as HTMLElement;
                const isLink = target?.tagName === "A" || target?.tagName === "BUTTON" || target?.closest("a") || target?.closest("button");

                if (isLink) {
                    cursorRef.current.style.height = "7px";
                    cursorRef.current.style.width = "7px";
                } else {
                    cursorRef.current.style.height = "10px";
                    cursorRef.current.style.width = "10px";
                }

                cursorRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
            }
        }

        const handleMouseLeave = () => {
            if (cursorRef.current) {
                cursorRef.current.style.height = "0px";
                cursorRef.current.style.width = "0px";
            }
        }

        const handleMouseEnter = () => {
            if (cursorRef.current) {
                cursorRef.current.style.height = "10px";
                cursorRef.current.style.width = "10px";
            }
        }

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        }
    }, [])

    return (
        <div
            ref={cursorRef}
            className="cursor fixed w-2.5 h-2.5 bg-primary rounded-full pointer-events-none transition-all duration-100 ease-linear z-1000"
            style={{
                left: 0,
                top: 0
            }}
        />
    )
}

export default Cursor