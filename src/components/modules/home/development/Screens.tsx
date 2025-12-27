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
        <div className="development-screens lg:mt-[100px]">

            {/* Sticky Video Container - Positioned outside relative container */}
            <div className="sticky top-0 w-full z-30">
                <div className="relative h-full w-full">
                    <Image src={handImg} alt="Hand" className="absolute -top-6 inset-0 object-cover" />

                    <div className="absolute left-[40.5%] inset-0">
                        <div className="relative top-9 rounded-[clamp(24px,4vw,42px)] overflow-hidden w-[clamp(180px,20vw,360px)] h-[clamp(360px,50vw,750px)]">
                            <video autoPlay loop muted className="h-full w-full object-cover">
                                <source src="./videos/development/phone.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Container with proper height */}
            <div className="relative">

                {/* Scrolling Images Container */}
                <div className="pb-10">
                    {screensData.map((screen, index) => (
                        <ul key={index} className="h-full w-full grid grid-cols-5">
                            {screen.items.map((item, index) => (
                                <li key={index} className="m-[clamp(8px,2vw,12.8px)] rounded-[clamp(12px,3vw,20px)] lg:rounded-[clamp(24px,4vw,44px)] overflow-hidden">
                                    <div className="w-[clamp(120px,18vw,200px)] h-[clamp(240px,36vw,400px)] sm:w-[clamp(150px,20vw,280px)] sm:h-[clamp(300px,40vw,560px)] md:w-[clamp(200px,22vw,365px)] md:h-[clamp(400px,44vw,770px)]">
                                        {item.image && <Image src={item.image} alt={item.title} className="h-full w-full object-cover" />}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Screens