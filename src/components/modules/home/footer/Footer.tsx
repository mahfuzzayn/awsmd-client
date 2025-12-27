"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

import "./Footer.css"
import AwsmdLogo2 from "@/components/icons/Awsmd2"
import AnimatedButton2 from "@/components/AnimatedButton2"
import { ArrowRight, ArrowUp } from "lucide-react"
import { m } from "framer-motion"
import { IFooter } from "@/types"
import Arrow45 from "@/components/icons/Arrow45"
import clsx from "clsx"

const Footer = () => {
    const footerRef = useRef<HTMLDivElement | null>(null);

    const footerLinks: IFooter[] = [
        {
            title: "Contact Us",
            items: [
                {
                    label: "Our Email",
                    href: "mailto:info@awsmd.com",
                    isEmail: true,
                    isLink: true,
                },
                {
                    label: "San Francisco, CA 2 Embarcadero Center, 8 floor, 94111"
                }
            ]
        },
        {
            title: "Follow us",
            items: [
                {
                    label: "dribble",
                    href: "https://dribbble.com/awsmd",
                    isLink: true,
                    isIcon: true,
                },
                {
                    label: "linkedin",
                    href: "https://www.linkedin.com/company/awsmd/",
                    isLink: true,
                    isIcon: true,
                },
                {
                    label: "clutch",
                    href: "https://clutch.co/profile/awsmd",
                    isLink: true,
                    isIcon: true,
                },
                {
                    label: "instagram",
                    href: "https://www.instagram.com/awsmd_com",
                    isLink: true,
                    isIcon: true,
                },
                {
                    label: "behance",
                    href: "https://www.behance.net/awsmd",
                    isLink: true,
                    isIcon: true,
                }
            ]
        },
        {
            title: "Services",
            items: [
                {
                    label: "Mobile development",
                    href: "https://awsmd.com/mobile-development",
                    isLink: true,
                },
                {
                    label: "Web development",
                    href: "https://awsmd.com/web-development",
                    isLink: true,
                },
                {
                    label: "Solid design solutions",
                    href: "https://www.subscription.awsmd.com/",
                    isLink: true,
                },
                {
                    label: "About",
                    href: "https://awsmd.com/#about",
                    isLink: true,
                },
                {
                    label: "Development",
                    href: "https://awsmd.com/#development",
                    isLink: true,
                },
                {
                    label: "Blogs",
                    href: "https://awsmd.com/blog",
                    isLink: true,
                },
                {
                    label: "Reviews",
                    href: "https://awsmd.com/#reviews",
                    isLink: true,
                },
            ]
        }
    ]

    useEffect(() => {
        const handleScroll = (event: any) => {
            console.log(event.target);
        }

        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div className="footer-section parallax relative overflow-hidden">
            <div className="absolute z-2 h-[44px] w-full bg-white rounded-bl-[33px] rounded-br-[33px]"></div>
            <div ref={footerRef} className="footer-parallax" style={{ transform: `translate3d(0px, 0px, 0px)` }}>
                <footer className="footer bg-[#c9d0d5] pt-[80px] pb-[30px] lg:pt-[120px] lg:pb-[50px]">
                    <div className="container mx-auto px-[15px] lg:px-[25px] xl:px-10">
                        <Link href="/" className="flex gap-[9px] items-center">
                            <AwsmdLogo2 className="w-[25px]" />
                            <span className="text-lg font-semibold leading-none">Awsmd</span>
                        </Link>

                        <div className="flex flex-col lg:flex-row">
                            <div className="w-full mt-[55px]">
                                <div className="lg:max-w-[450px] xl:max-w-[640px]">
                                    <h2 className="text-[clamp(32px,7vw,60px)] font-semibold mb-[22px] leading-none">We would love to hear from you.</h2>
                                    <p className="hidden md:block text-[#64686a]">Feel free to reach our if you want to collaborate with us, or simply have a chat</p>
                                    <AnimatedButton2 className="w-full md:w-auto mt-[29px] mb-[33px]" label="Become a Client" icon={<ArrowRight size={16} />} />
                                    <p className="hidden md:block text-[#64686a]">Don’t like the forms? Drop us a line via email.</p>
                                    <Link href="mailto:info@awsmd.com" className="hidden md:block mt-[11px] font-medium">info@awsmd.com</Link>
                                </div>
                            </div>
                            <div className="w-full flex lg:justify-end lg:pl-[25px] mt-[44px] lg:mt-0">
                                <nav className="flex gap-20 justify-between max-w-[670px]">
                                    {footerLinks.map((item, index) => (
                                        <div key={index} className={clsx("w-full", { "hidden md:block": index === 1 })}>
                                            <h3 className="text-[18px] font-semibold mb-5 whitespace-nowrap tracking-tight">{item.title}</h3>
                                            <ul className={clsx("flex flex-col gap-[11px]", { "w-[120px]": index === 1 })}>
                                                {item.items.map((link, index) => (
                                                    <li key={index} className="text-[#64686a] font-medium">
                                                        {link.isEmail && link.isLink && link.href ?
                                                            <>
                                                                {`${link.label}`}
                                                                <br />
                                                                <Link href={link.href} className="underline">
                                                                    {link.href}
                                                                </Link>
                                                            </>
                                                            : link.isLink && link.href ?
                                                                <Link href={link.href} className="group flex justify-between items-center whitespace-nowrap">
                                                                    <span className="mr-4">{link.label}</span>
                                                                    {link.isIcon && <Arrow45 className="lg:group-hover:rotate-360 transition-all duration-[0.45s] ease-in-out" />}
                                                                </Link>
                                                                : `${link.label}`}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        <div className="flex justify-between mt-[38px] md:mt-20 pt-[15px] border-t border-[#a5a9ac]">
                            <p className="flex items-center gap-1.5 text-[#64686a] text-sm font-medium">© Awsmd 2025. All rights reserved<span className="h-1 w-1 bg-black inline-block rounded-full"></span><Link href="/#" className="text-black underline">Privacy Policy</Link></p>
                            <button className="hidden sm:flex text-sm font-medium cursor-pointer gap-2 items-center whitespace-nowrap" onClick={handleScrollToTop}>
                                Back to the top
                                <ArrowUp size={16} />
                            </button>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer