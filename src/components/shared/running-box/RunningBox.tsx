import clsx from "clsx"
import "./RunningBox.css"

const RunningBox = ({ color = "#d4d4d485", direction = "left", className }: { color?: string, direction?: "left" | "right"; className?: string }) => {

    const MarqueeRepeater = () => (
        <div className="marquee-repeater">
            <span className="flex">
                <span style={{ borderColor: color }} className="mx-[10.5px] w-[clamp(54px,10vw,185px)] h-[clamp(90px,20vw,308px)] border-[2.7px] rounded-[clamp(8px,2vw,25px)]"></span>
                <span style={{ borderColor: color }} className="mx-[10.5px] w-[clamp(54px,10vw,185px)] h-[clamp(90px,20vw,308px)] border-[2.7px] rounded-[clamp(8px,2vw,25px)]"></span>
            </span>
        </div>
    );

    const MarqueeItem = () => (
        <div className="marquee-item flex">
            <MarqueeRepeater />
            <MarqueeRepeater />
        </div>
    );

    return (
        <div className={clsx("running-box-marquee absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1 w-full", className)}>
            <div className="marquee-wrapper flex" data-direction={direction}>
                <MarqueeItem />
                <MarqueeItem />
                <MarqueeItem />
                <MarqueeItem />
                <MarqueeItem />
                <MarqueeItem />
            </div>
        </div>
    )
}

export default RunningBox