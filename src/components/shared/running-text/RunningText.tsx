import clsx from "clsx";
import "./RunningText.css"

const RunningText = ({ text = "Data driven user focused value based", color = "#2ca8fe", direction = "left", className }: { text?: string, color?: string, direction?: "left" | "right", className?: string }) => {
    return (
        <div className={clsx("running-text-marquee-wrapper overflow-hidden w-full", className)}>
            <div className={clsx("marquee-container", direction === "left" ? "marquee-left" : "marquee-right")}>
                <div className="marquee-content">
                    <div className="px-8 inline-flex">
                        <p style={{ color }} className={clsx("text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[240px] whitespace-nowrap font-medium leading-tight")}>
                            {text}
                        </p>
                    </div>
                </div>
                <div className="marquee-content">
                    <div className="px-8 inline-flex">
                        <p style={{ color }} className={clsx("text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[240px] whitespace-nowrap font-medium leading-tight")}>
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default RunningText