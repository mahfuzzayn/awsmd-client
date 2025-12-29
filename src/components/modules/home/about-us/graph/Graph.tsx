"use client"

import { useState } from "react"
import "./Graph.css"

const Graph = () => {
    const [hoveredRing, setHoveredRing] = useState<number | null>(null)

    return (
        <div className="about-us-graph w-full pl-[25px] hidden xl:flex items-end justify-end grow">
            <div className="w-full max-w-[625px] select-none">
                <div className="about-us-graph pb-[100%] relative">
                    {/* Main Circle */}
                    <div className="w-full h-full bg-[#F4F4F4] absolute top-0 right-0 rounded-full border border-transparent"></div>

                    {/* First Circle */}

                    {/* Starting Point -> top: top-[84.3553%] right-[84.3553%] */}
                    {/* Ending Point -> Each motion.p's given top and right percent(%) value */}

                    {/* First Circle Box */}
                    <GraphCircle
                        size="85.4%"
                        className={`top-[2.13812%] right-[2.13812%] bg-[#EEEEEE]`}
                        anchorAngle={135}
                        items={[
                            { label: "A/B Testing", angle: 60, color: "black" },
                            { label: "Growth", angle: 135, color: "blue", isAnchor: true },
                            { label: "Experience", angle: 175, color: "black" },
                            { label: "Optimization", angle: 210, color: "black" },
                        ]}
                        itemZIndex={30}
                        onHoverChange={(isHovered) => setHoveredRing(isHovered ? 1 : null)}
                    />

                    {/* Second Circle Box */}
                    <GraphCircle
                        size="68.14%"
                        className={`top-[4.66579%] right-[4.66579%] bg-[#E1E1E1] ${hoveredRing === 1 ? "opacity-30" : "opacity-100"}`}
                        anchorAngle={135}
                        items={[
                            { label: "Development", angle: 50, color: "black" },
                            { label: "Visual Design", angle: 85, color: "black" },
                            { label: "Insights", angle: 135, color: "blue", isAnchor: true },
                            { label: "User Experience", angle: 175, color: "black" },
                            { label: "Innovations", angle: 200, color: "black" },
                        ]}
                        itemZIndex={40}
                        onHoverChange={(isHovered) => setHoveredRing(isHovered ? 2 : null)}
                    />

                    {/* Third Circle Box */}
                    <GraphCircle
                        size="42%"
                        className={`top-[8.4939%] right-[8.4939%] bg-[#F4F4F4] ${hoveredRing === 1 || hoveredRing === 2 ? "opacity-30" : "opacity-100"
                            }`}
                        anchorAngle={315}
                        items={[
                            { label: "Product", angle: 315, color: "blue", isAnchor: true },
                            { label: "Data Science", angle: 45, color: "black" },
                            { label: "UX Research", angle: 110, color: "black" },
                            { label: "UX Strategy", angle: 180, color: "black" },
                        ]}
                        itemZIndex={50}
                        direction="clockwise"
                        onHoverChange={(isHovered) => setHoveredRing(isHovered ? 3 : null)}
                    />
                </div>
            </div>
        </div>
    )
}

interface GraphItem {
    label: string
    angle: number
    color: "blue" | "black"
    isAnchor?: boolean
}

interface GraphCircleProps {
    size: string
    className: string
    anchorAngle: number
    items: GraphItem[]
    zIndex?: number
    itemZIndex?: number
    direction?: "clockwise" | "counter-clockwise"
    onHoverChange?: (isHovered: boolean) => void
}

const GraphCircle = ({ size, className, anchorAngle, items, zIndex, itemZIndex, direction, onHoverChange }: GraphCircleProps) => {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
        onHoverChange?.(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        onHoverChange?.(false)
    }

    return (
        <div
            className={`absolute rounded-full border border-transparent hover:border-[#BEBEBE] transition-all duration-[0.4s] ease-in-out ${className}`}
            style={{ width: size, height: size, zIndex }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {items.map((item, index) => {
                let targetAngle = item.angle
                if (direction === "clockwise" && targetAngle < anchorAngle) {
                    targetAngle += 360
                } else if (direction === "counter-clockwise" && targetAngle > anchorAngle) {
                    targetAngle -= 360
                }

                const currentAngle = item.isAnchor || isHovered ? targetAngle : anchorAngle
                const isVisible = item.isAnchor || isHovered

                return (
                    <div
                        key={index}
                        className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-end"
                        style={{
                            transform: `rotate(${currentAngle}deg)`,
                            transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                            zIndex: itemZIndex,
                        }}
                    >
                        <p className={`relative flex items-center justify-center z-10 ${item.color === "blue" ? "w-3 h-3 bg-[#1B76FF]" : "w-1 h-1 bg-black"}`}
                            style={{
                                borderRadius: "50%",
                                transform: `translateX(50%) rotate(${-currentAngle}deg)`,
                                transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease-in-out",
                                opacity: isVisible ? 1 : 0,
                            }}
                        >
                            <span
                                className="absolute font-semibold whitespace-nowrap"
                                style={{
                                    top: "-18px",
                                    left: "14px",
                                    transform: "translateY(-100%)",
                                    opacity: isVisible ? 1 : 0,
                                    transition: "opacity 0.3s ease-in-out 0.2s",
                                }}
                            >
                                {item.label}
                            </span>
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default Graph