"use client"

import AnimatedButton from '../AnimatedButton'
import { Copy, Plus, Star } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import AwsmdLogo from '../icons/Awsmd'
import ClutchIcon from '../icons/Clutch'
import Link from 'next/link'
import { navLinks } from '../modules/home/HeroSection'
import DesignRushIcon from '../icons/DesignRush'
import DribbbleIcon from '../icons/Dribbble'

const Navigation = () => {
    const [lang, setLang] = useState<"en" | "cn">("en");
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [hasScrolled, setHasScrolled] = useState<boolean>(false);

    const languages = [
        {
            value: "en",
            label: "EN"
        },
        {
            value: "cn",
            label: "CN"
        }
    ]

    useEffect(() => {
        const handleScrollChange = () => {
            if (window.scrollY > window.innerHeight) {
                setHasScrolled(true)
            } else {
                setHasScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScrollChange)

        return () => {
            window.removeEventListener("scroll", () => handleScrollChange)
        }
    }, [])

    return (
        <div className="navigation">

            {/* Top Right Floating Menu */}
            <div className="flex gap-4 items-center fixed top-7 lg:top-9 right-10 z-110">
                <div className="hidden lg:block">
                    <AnimatedButton label="Become a Client" className={clsx({ "text-white bg-primary": hasScrolled })} icon={<Plus size={16} className={clsx("relative top-px")} />} />
                </div>

                <Select value={lang} onValueChange={(value) => setLang(value as "en" | "cn")}>
                    <SelectTrigger className={clsx("text-white [&_svg:not([class*='text-'])]:text-white rounded-[16px] cursor-pointer transition-colors duration-300", { "text-primary border-primary [&_svg:not([class*='text-'])]:text-primary": hasScrolled })} defaultValue="en">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent className={clsx("relative right-10 z-110", { "top-12": lang === "en" }, { "top-[76px]": lang === "cn" })}>
                        {languages.map((item) => (
                            <SelectItem key={item.value} value={item.value} className="cursor-pointer">{item.label}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                {/* Hamburger */}
                <button className={clsx("h-12 w-12 rounded-full bg-white/30 flex justify-center items-center cursor-pointer transition-colors duration-300", { "bg-black/20!": hasScrolled }, { "bg-white/40!": isMenuOpen })} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <div className="h-3.5 w-4 space-y-1 overflow-hidden">
                        <div className={clsx("h-0.5 w-1/2 bg-white rounded-[2px] ml-auto transform transition-all duration-[0.4s] ease-in-out", { "w-full -rotate-45 translate-x-0 translate-y-[6px]": isMenuOpen })}></div>
                        <div className={clsx("h-0.5 w-full bg-white rounded-[2px] transform transition-all duration-[0.4s] ease-in-out", { "-translate-x-full": isMenuOpen })}></div>
                        <div className={clsx("h-0.5 w-1/2 bg-white rounded-[2px] transform transition-all duration-[0.4s] ease-in-out", { "w-full rotate-45 translate-x-0 -translate-y-[6px]": isMenuOpen })}></div>
                    </div>
                </button>
            </div>

            {/* Menu */}
            <div className={clsx("font-plus-jakarta-sans flex h-full w-full fixed top-0 left-0 z-100 overflow-hidden", { "pointer-events-none": !isMenuOpen }, { "pointer-events-auto": isMenuOpen })}>

                {/* Left Part: 350px max */}
                <div className={clsx("hidden lg:block w-full max-w-[210px] lg:max-w-[350px] bg-[#2722DF] p-10 pb-[50px] transition-transform duration-500 ease-in-out -translate-y-[100vh]", { "translate-y-0": isMenuOpen })}>
                    <div className={clsx("h-full flex flex-col justify-between transition-opacity duration-1000 opacity-0 ease-in", { "opacity-100": isMenuOpen })}>
                        <div>
                            <AwsmdLogo className="text-white h-16 w-16" />
                        </div>
                        <div className="text-white space-y-5">
                            <div className="flex gap-2 items-center">
                                <div>
                                    <ClutchIcon className="h-7 w-7" />
                                </div>
                                <Link href="https://clutch.co/profile/awsmd" target="_blank"><div className="-space-y-1">
                                    <div className="flex">
                                        {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={16} className="text-white fill-white" strokeWidth={0} />)}
                                    </div>
                                    <span className="text-[11px]">Gold verified, 40 reviews</span>
                                </div></Link>
                            </div>
                            <div className="max-w-[190px] leading-4">
                                <span className="text-[13px]">Awesome design for awesome businesses</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Part all after left */}
                <div className={clsx("h-full w-full bg-[#4541F1] px-5 py-[40px] pt-[35px] xl:pt-[40px] xl:pl-[45px] xl:pr-[30px] transform transition-transform duration-500 ease-in-out translate-y-full", { "translate-y-0!": isMenuOpen })}>
                    <div className={clsx("h-full flex flex-col font-plus-jakarta-sans transition-opacity duration-1000 opacity-0 ease-in", { "opacity-100": isMenuOpen })}>
                        {/* Top */}
                        <div>
                            <div className="hidden lg:block">
                                <span className="text-gray-300 font-medium">Navigation</span>
                            </div>
                            <div className="lg:hidden">
                                <AwsmdLogo className="text-white h-10 w-12" />
                            </div>
                        </div>

                        {/* Bottom */}
                        <div className="flex flex-col lg:flex-row justify-between mt-[55px] lg:mt-auto pt-2.5">
                            {/* Left */}
                            <div className="flex flex-col gap-[clamp(0.5rem,5vh,2rem)]">
                                {navLinks.map((link, index) =>
                                    <button key={`${link.href}-${link.label}`} className="group flex text-left text-white font-medium text-[clamp(2rem,10vw,3rem)] lg:text-[clamp(2rem,10vh,7rem)] leading-[clamp(1.5rem,10vh,2rem)] lg:leading-[clamp(1.5rem,10vh,6rem)] cursor-pointer">
                                        <span className={clsx("h-[clamp(3px,1vh,6px)] lg:h-[clamp(5px,1vh,10px)] w-0 group-hover:w-[clamp(1rem,10vw,5rem)] bg-white self-center mr-2 transition-all duration-300 ease-in-out")}></span>
                                        <span className="whitespace-nowrap">{link.label}</span>
                                        <span className="text-[11px] text-[#ffffff80] font-semibold relative -top-4">0{index + 1}</span>
                                    </button>
                                )}
                            </div>

                            {/* Right */}
                            <div className="flex justify-between lg:justify-start gap-12 items-end mt-[60px] lg:mt-0">
                                <div className="flex flex-col gap-10">
                                    <div>
                                        <h1 className="text-[clamp(27px,3vw,37px)] text-white font-medium">Telegram</h1>
                                        <div className="flex gap-2 items-center">
                                            <Link href="mailto:info@awsmd.com">
                                                <span className="text-[#ffffff80] text-lg font-medium underline">info@awsmd.com</span>
                                            </Link>
                                            <button className="bg-gray-300 cursor-pointer p-1.5 rounded-full"><Copy size={10} className="text-black/50" /></button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-[15px] font-medium">
                                        <span className="text-white">Privacy Policy & Cookies</span>
                                        <span className="text-[#ffffff80]">© Awsmd 2025</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Link href="https://www.designrush.com/agency/profile/awsmd" target="_blank">
                                        <button className="cursor-pointer bg-white/30 py-[9px] px-3 rounded-full"><DesignRushIcon /></button>
                                    </Link>
                                    <Link href="https://dribbble.com/awsmd" target="_blank">
                                        <button className="cursor-pointer bg-white/30 p-3 rounded-full"><DribbbleIcon /></button>
                                    </Link>
                                    <Link href="https://clutch.co/profile/awsmd" target="_blank">
                                        <button className="cursor-pointer bg-white/30 p-3 rounded-full h-full w-full"><ClutchIcon color="white" /></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navigation