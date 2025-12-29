import "./Development.css"

import DevLine from "@/components/icons/DevLine"
import phone01Img from "@/assets/images/development/phones/phone-01.png"
import phone02Img from "@/assets/images/development/phones/phone-02.png"
import Image from "next/image"
import RunningText from "@/components/shared/running-text/RunningText"
import Screens from "./Screens"

const Development = () => {
    return (
        <section className="development-section bg-[#0d0f11] pt-8 relative">
            <div className="dev-line absolute top-8 left-0 z-20 w-full pointer-events-none">
                <DevLine color="#2D2D2E" className="h-full w-full" />
            </div>
            <div className="development-content-box relative z-10">
                <div className="container mx-auto px-[15px] md:px-10 relative z-20">
                    <div className="dev-content pb-[400px] lg:pb-0">
                        <h2 className="flex justify-between text-white">
                            <span className="flex flex-col items-start font-plus-jakarta-sans font-medium uppercase text-[clamp(2rem,5vw,6.75rem)] md:text-[clamp(3rem,7vw,6.75rem)] lg:text-[clamp(3.4rem,10vw,6.75rem)] leading-tight">
                                <span>{`{Smart}`}</span>
                                <span>Development</span>
                            </span>
                            <span className="font-plus-jakarta-sans uppercase text-[clamp(3.625rem,5vw,10.81rem)] md:text-[clamp(5.625rem,10vw,10.81rem)] text-[#ffffff66] leading-tight">**</span>
                        </h2>
                        <div className="flex items-center justify-between mt-5 md:mt-[470px] lg:mt-[516px]">
                            <p className="text-[#ffffffde] text-[clamp(0.95rem,2vw,1.25rem)] max-w-[clamp(315px,40vw,460px)] leading-tight">Making your business outstanding is a science. We take it (a) seriously and (b) creatively.</p>
                            <div className="hidden lg:flex gap-1.5">
                                <button className="cursor-pointer bg-[#E8E8E8] text-black px-[15.5px] py-[4.5px] text-[17px] rounded-[50px] leading-tight">Check Our Portfolio</button>
                                <button className="cursor-pointer bg-[#505050] text-white px-[15.5px] py-[4.5px] text-[17px] rounded-[50px] leading-tight">Get In Touch</button>
                            </div>
                        </div>
                    </div>
                </div>
                <RunningText color="#191B1D" direction="right" className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[150%]" />
            </div>
            <div className="development-phones w-[80%] md:w-[clamp(320px,40vw,600px)] h-[clamp(400px,40vw,687px)] absolute z-30 top-[235px] left-1/2 -translate-x-[50%]">
                <Image src={phone01Img} alt="phone-01" className="phone phone-1 h-auto w-full max-w-[clamp(195px,30vw,340px)] absolute top-0 left-0" />
                <Image src={phone02Img} alt="phone-02" className="phone phone-2 h-auto w-full max-w-[clamp(220px,30vw,340px)] absolute bottom-0 right-0 md:right-[5%]" />
            </div>
            <div className="development-screens relative z-40">
                <Screens />
            </div>
        </section>
    )
}

export default Development