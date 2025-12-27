import AwsmdTag from "@/components/shared/AwsmdTag"
import clsx from "clsx";
import Image from "next/image";

import ArrowDown from "@/components/icons/ArrowDown";
import AnimatedButton2 from "@/components/AnimatedButton2";
import AnimatedButton3 from "@/components/AnimatedButton3";
import { ArrowRight, Dot } from "lucide-react";

export interface IPortfolio {
    items: {
        title: string;
        video?: string;
        image?: string;
    }[]
}

const OurPorfolio = () => {
    const portfolioData: IPortfolio[] = [
        {
            items: [
                {
                    title: "SaaS - Website Design",
                    video: "./videos/our-portfolio/portfolio-1.compressed.mp4"
                },
                {
                    title: "Mobile AI App",
                    image: "./images/our-portfolio/portfolio-2.png"
                }
            ],
        },
        {
            items: [
                {
                    title: "Lattice - HR Management Landing Page",
                    image: "./images/our-portfolio/portfolio-4.png"
                },
                {
                    title: "AI Platform's Onboarding",
                    video: "./videos/our-portfolio/portfolio-5.compressed.mp4"
                }
            ]
        },
        {
            items: [
                {
                    title: "AR Tool Landing Page>",
                    video: "./videos/our-portfolio/portfolio-3.compressed.mp4"
                },
                {
                    title: "Social Media App",
                    image: "./images/our-portfolio/portfolio-6.png"
                }
            ]
        }
    ]

    return (
        <section className="our-portfolio-section pt-[100] pb-[55px]">
            <div className="container mx-auto px-[15px] lg:px-[25px] xl:px-10">
                <header className="flex flex-col lg:flex-row justify-between">
                    <div>
                        <AwsmdTag serial={3} title="Our Portfolio" />
                        <div className="hidden lg:block mt-[82px] max-w-[350px]">
                            <p className="text-[25px] text-[#00000061] leading-tight">Our user-centered design encourages productivity and boosts revenue.</p>
                        </div>
                    </div>
                    <div className="max-w-[620px] mt-4 lg:mt-0 lg:pl-[25px]">
                        <h2 className="font-plus-jakarta-sans text-[#242424] text-[60px] leading-none">We don't do cookie-cutter solutions</h2>
                        <div className="hidden lg:block mt-[60px]">
                            <button className="cursor-pointer text-[#242424b3] font-medium">Schedule Meeting</button>
                        </div>
                    </div>
                </header>
                <ul className="mt-[85px]">
                    {portfolioData.map((portfolio, pIdx) => (
                        <li key={pIdx} className="flex flex-col lg:flex-row">
                            {portfolio.items.map((item, cIdx) => (
                                <div
                                    key={cIdx}
                                    className={clsx("w-full p-[5px]", { "lg:w-[60%]": pIdx === 0 && cIdx === 0 }, { "lg:w-[40%]": pIdx === 0 && cIdx === 1 }, { "lg:w-[40%]": pIdx === 1 && cIdx === 0 }, { "lg:w-[60%]": pIdx === 1 && cIdx === 1 }, { "lg:w-[55%]": pIdx === 2 && cIdx === 0 }, { "lg:w-[45%]": pIdx === 2 && cIdx === 1 })}
                                >
                                    <div className="h-full w-full rounded-[18px] 2xl:rounded-[33px] overflow-hidden relative group">
                                        <div className="relative h-full w-full z-10">
                                            {item.video ?
                                                <div className="lg:group-hover:scale-[1.05] transition-transform duration-[0.4s] ease-in-out">
                                                    <video className="rounded-[18px] 2xl:rounded-[33px]" autoPlay loop muted>
                                                        <source src={item.video} type="video/mp4" />
                                                    </video>
                                                </div>
                                                : <Image
                                                    className="relative! lg:absolute lg:group-hover:scale-[1.05] transition-transform duration-500 ease-in-out object-cover rounded-[18px] 2xl:rounded-[33px]"
                                                    fill
                                                    src={item.image!.slice(1, item.image!.length) || item.image!}
                                                    alt={item.title}
                                                />
                                            }
                                        </div>
                                        <span className="hidden lg:block bg-[#5f8cfe] w-full h-[40%] rounded-[20%] blur-[90px] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[150%] opacity-0 transition-all duration-[0.4s] ease-in-out group-hover:translate-y-[30%] group-hover:opacity-100 z-10"></span>
                                        <div className={clsx("bg-white lg:m-2.5 pt-6 pb-3 lg:p-[12px] 2xl:pl-[35px] 2xl:pr-[19px] 2xl:py-[19px] lg:absolute bottom-0 left-0 z-20 rounded-[18px] 2xl:rounded-[33px] flex items-center justify-between", { "w-[97%] xl:w-[98%]": pIdx === 0 && cIdx === 0 }, { "w-[95%] xl:w-[97%]": pIdx === 0 && cIdx === 1 }, { "w-[95%] xl:w-[97%]": pIdx === 1 && cIdx === 0 }, { "w-[96.5%] xl:w-[98%]": pIdx === 1 && cIdx === 1 }, { "w-[96.5%] xl:w-[98%]": pIdx === 2 && cIdx === 0 }, { "w-[96%] xl:w-[97%]": pIdx === 2 && cIdx === 1 })}>
                                            <div>
                                                <h3 className="text-lg font-bold">{item.title}</h3>
                                            </div>
                                            <div className="absolute lg:relative top-2 right-2 lg:top-0 lg:left-0 bg-white lg:bg-[#d9d9d9] h-[42px] w-[42px] lg:h-[52px] lg:w-[52px] rounded-full flex justify-center items-center z-30">
                                                <ArrowDown className="h-[16px] w-[16px] lg:h-[18px] lg:w-[18px] text-black -rotate-135 lg:group-hover:rotate-225 transition-all duration-[0.45s] ease-in-out" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </li>
                    ))}
                </ul>
                <AnimatedButton3 className="mt-10 mx-auto" label="Check Full Portfolio" href="https://dribbble.com/awsmd" icon={<ArrowRight className="text-[#242424]" size={16} />} />
            </div>
        </section >
    )
}

export default OurPorfolio