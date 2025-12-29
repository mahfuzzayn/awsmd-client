import Image from "next/image"

import texture1Img from "@/assets/images/banner/texture-1.jpg"
import texture2Img from "@/assets/images/banner/texture-2.jpg"
import RunningBox from "@/components/shared/running-box/RunningBox"

const Banner = () => {
    return (
        <section className="banner-section py-5">
            <div className="container mx-auto px-[15px] lg:px-[25px] xl:px-10">
                <div className="bg-[#f8f5f2] h-[clamp(380px,50vw,650px)] rounded-[clamp(20px,5vw,130px)] lg:rounded-[clamp(20px,10vw,130px)] relative flex justify-center items-center overflow-hidden">
                    <RunningBox direction="right" />
                    <h2 className="flex flex-col text-[#2b2d40] text-center font-medium text-[clamp(36px,5vw,88px)] leading-[clamp(44px,5vw,110px)] relative z-2 whitespace-nowrap">
                        <span>Numbers don't lie</span>
                        <span className="flex justify-center items-center gap-5">
                            <span>so we use Data</span>
                            <Image src={texture1Img} alt="texture-1" className="w-[clamp(20%,10vw,100%)] rounded-full" />
                        </span>
                        <span className="flex justify-center items-center gap-5">
                            <Image src={texture2Img} alt="texture-2" className="w-[clamp(20%,10vw,100%)] rounded-full" />
                            <span>Science to drive</span>
                        </span>
                        <span className="text-[#6e8d9a]">calculated growth</span>
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Banner