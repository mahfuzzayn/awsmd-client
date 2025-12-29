import screen1Phone1Img from "@/assets/images/development/phones/screen1-1.png"
import screen1Phone2Img from "@/assets/images/development/phones/screen1-2.png"
import screen1Phone3Img from "@/assets/images/development/phones/screen1-3.png"
import screen1Phone4Img from "@/assets/images/development/phones/screen1-4.png"

import screen2Phone1Img from "@/assets/images/development/phones/screen2-1.png"
import screen2Phone2Img from "@/assets/images/development/phones/screen2-2.png"
import screen2Phone3Img from "@/assets/images/development/phones/screen2-3.png"
import screen2Phone4Img from "@/assets/images/development/phones/screen2-4.png"

import screen3Phone1Img from "@/assets/images/development/phones/screen3-1.png"
import screen3Phone2Img from "@/assets/images/development/phones/screen3-2.png"
import screen3Phone3Img from "@/assets/images/development/phones/screen3-3.png"
import screen3Phone4Img from "@/assets/images/development/phones/screen3-4.png"

import handImg from "@/assets/images/development/hand.png"

import Image from "next/image"

const Screens = () => {
    const screensData = [
        {
            items: [
                {
                    title: "Screen 1 Phone 1",
                    image: screen1Phone1Img,
                },
                {
                    title: "Screen 1 Phone 2",
                    image: screen1Phone2Img,
                },
                {
                    title: "Blank",
                },
                {
                    title: "Screen 1 Phone 3",
                    image: screen1Phone3Img,
                },
                {
                    title: "Screen 1 Phone 4",
                    image: screen1Phone4Img,
                },
            ]
        },
        {
            items: [
                {
                    title: "Screen 2 Phone 1",
                    image: screen2Phone1Img,
                },
                {
                    title: "Screen 2 Phone 2",
                    image: screen2Phone2Img,
                },
                {
                    title: "Blank",
                },
                {
                    title: "Screen 2 Phone 3",
                    image: screen2Phone3Img,
                },
                {
                    title: "Screen 2 Phone 4",
                    image: screen2Phone4Img,
                },
            ]
        },
        {
            items: [
                {
                    title: "Screen 3 Phone 1",
                    image: screen3Phone1Img,
                },
                {
                    title: "Screen 3 Phone 2",
                    image: screen3Phone2Img,
                },
                {
                    title: "Blank",
                },
                {
                    title: "Screen 3 Phone 3",
                    image: screen3Phone3Img,
                },
                {
                    title: "Screen 3 Phone 4",
                    image: screen3Phone4Img,
                },
            ]
        }
    ]

    return (
        <div className="development-screens mt-[60px] lg:mt-[100px]">
            {/* Development Screens */}
            <div className="development-screens-wrapper max-w-full overflow-hidden flex justify-center">
                <div className="pb-10">
                    {screensData.map((screen, index) => (
                        <ul key={index} className="flex">
                            {screen.items.map((item, index) => (
                                <li key={index} className="m-2 lg:m-[12.8px] relative rounded-[20px] lg:rounded-[30.25px] 2xl:rounded-[46.75px] overflow-hidden">
                                    <div className="h-[310px] w-[150px] md:h-[424px] md:w-[200px]  lg:h-[655px] lg:w-[310px] 2xl:h-[770px] 2xl:w-[365px] relative">
                                        {item.image && <Image src={item.image} alt={item.title} className="h-full w-full object-cover" />}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>

            {/* Development Hand - Sticky Phone & Video Section */}
            <div className="development-hand-wrapper h-[calc(100%+15px)] lg:h-[calc(100%+30px)] w-full flex flex-col absolute -top-[15px] lg:-top-[30px] left-0">
                <div className="mt-auto h-[380px] md:h-[500px] lg:h-[740px] 2xl:h-[940px] w-full flex items-start justify-center overflow-hidden sticky bottom-0 will-change-transform translate-none rotate-none scale-none pointer-events-none">
                    <Image src={handImg} alt="Hand" className="relative top-2 2xl:top-0 left-0 min-w-[770px]! w-[770px]! md:min-w-[1028.5px]! md:w-[1028.5px]! lg:min-w-[1590px]! lg:w-[1590px]! 2xl:min-w-[1870px]! 2xl:w-[1870px]! object-cover" style={{ objectPosition: "center top" }} />

                    <div className="absolute z-2 w-[145px] h-[305px] top-[30px] rounded-[18px] md:w-[193px] md:h-[405px] md:top-[36px] md:rounded-[22px] lg:w-[297px] lg:h-[630px] lg:top-14 lg:rounded-[35px] 2xl:w-[348px] 2xl:h-[741px] 2xl:top-[56px] 2xl:rounded-[42px]">
                        <video autoPlay loop muted className="h-full w-full object-cover object-center" style={{ borderRadius: "inherit" }}>
                            <source src="./videos/development/phone.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Screens