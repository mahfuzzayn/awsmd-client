"use client"

import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/images/logo.png"
import { Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import heroPoster from "@/assets/images/hero_poster.jpg"
import clutchLogo from "@/assets/images/clutch-logo.png"
import playImg from "@/assets/images/play.png"
import clickToPlay from "@/assets/images/click-to-play.png"
import { useRef, useState } from "react";
import clsx from "clsx";
import MoveUpButton from "@/components/MoveUpButton";
import ArrowDown from "@/components/icons/ArrowDown";

export const navLinks = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Our Services",
    href: "/services"
  },
  {
    label: "About Us",
    href: "/about-us"
  },
  {
    label: "Portfolio",
    href: "/portfolio"
  },
  {
    label: "Reviews",
    href: "/reviews"
  },
  {
    label: "Contact Us",
    href: "/contact-us"
  }
]

const HeroSection = () => {
  const [play, setPlay] = useState<boolean>(false);
  const autoPlayerRef = useRef<HTMLIFrameElement | null>(null);

  const videoSrc = play
    ? "https://player.vimeo.com/video/823892274?h=fc36315143&autoplay=1"
    : "https://player.vimeo.com/video/823892274?h=fc36315143";

  const menuLinks = [
    {
      label: "About Us",
      href: "/about-us"
    },
    {
      label: "Cases",
      href: "/cases"
    },
    {
      label: "Reviews",
      href: "/reviews"
    },
    {
      label: "Contact Us",
      href: "/contact-us"
    },
  ]

  const handlePlay = () => {
    setPlay(true)

    if (autoPlayerRef.current) {
      autoPlayerRef.current.remove();
    }
  }

  return (
    <section className="hero-section p-3 lg:h-screen">
      <div className="h-full bg-gray-200 px-3 md:px-[19px] pt-2 pb-[30px] rounded-[33px] overflow-hidden relative">
        {/* Hero Video */}
        <video className="h-full w-full absolute z-10 inset-0 pointer-event-none object-cover object-center" poster={heroPoster.src} autoPlay muted loop>
          <source src="./videos/hero/hero.mp4" type="video/mp4"></source>
        </video>

        <div className="flex flex-col justify-between h-full relative z-20">
          {/* Hero Header */}
          <header className="hero-header">
            <div className="flex mt-[15px]">

              <Link href="/" className="flex items-center w-[240px] gap-[9px]">
                <Image src={logoImg} alt="Awsmd" width={15} height={15} className="w-[25px] h-[21px]" />
                <h4 className='text-lg font-bold text-white'>Awsmd</h4>
              </Link>

              <div className="hidden 2xl:flex bg-white text-black rounded-[33px] px-9 mx-auto">
                {menuLinks.map(link => (
                  <div key={link.href} className="flex items-center">
                    <button className="cursor-pointer py-[18px] px-5 text-[15px] h-12.75 font-medium group overflow-hidden">
                      <MoveUpButton label={link.label} />
                    </button>
                  </div>
                ))}
              </div>

            </div>
          </header>

          {/* Hero Content */}
          <div className="hero-content flex flex-col lg:flex-row justify-between mt-12 lg:mt-0 pt-[25px] lg:px-5">
            {/* Left Content */}
            <div className="flex justify-between text-white sm:pb-10">
              <div>
                <div className="font-freigeist-cons text-[clamp(3.125rem,15vw,8rem)] md:text-[clamp(2.5rem,10vw,10rem)] tracking-tighter whitespace-nowrap leading-[clamp(3rem,15vw,10rem)] md:leading-[clamp(2.5rem,10vw,8rem)] md:pb-[25px] uppercase">
                  <h1>We create</h1>
                  <div className="flex justify-end md:justify-start items-center gap-2 sm:gap-4">
                    <div className="hidden md:flex cursor-pointer w-[clamp(50px,10vw,95px)] h-[clamp(50px,10vw,95px)] items-center justify-center rounded-full group bg-white hover:bg-transparent text-black border-4 border-white relative top-1 sm:top-2 transition-all duration-300 ease-in-out">
                      <ArrowDown className="text-black group-hover:text-white h-[clamp(1rem,5vw,2rem)] w-[clamp(1rem,5vw,2rem)] transition-all duration-300 ease-in-out" />
                    </div>
                    <h1 className="font-bold">
                      <i>A</i>
                      wesome
                    </h1>
                  </div>
                  <div>
                    <h1 className="font-bold">Design
                      <span className="max-[420px]:h-[clamp(3rem,10vw,10rem)] h-[clamp(3.125rem,12vw,10rem)] md:h-[clamp(2.5rem,8vw,8rem)] w-[clamp(0.5rem,2vw,1.3rem)] relative top-2 left-2 bg-white inline-block animate-pulse duration-100"></span>
                    </h1>
                  </div>
                </div>

                <div className="flex justify-between items-center w-full gap-2 mt-[30px]">
                  <div className="md:hidden cursor-pointer flex items-center justify-center rounded-full p-4 group bg-white text-black hover:bg-transparent border-4 border-white relative top-1 sm:top-2 transition-all duration-300 ease-in-out">
                    <ArrowDown className="text-black group-hover:text-white h-[clamp(0.3rem,5vw,1.2rem)] w-[clamp(0.3rem,5vw,1.2rem)] transition-all duration-300 ease-in-out" />
                  </div>
                  <div className="w-full flex gap-1 flex-col text-end relative top-2">
                    <span className="lg:hidden">Scroll</span>
                    <div className="w-full h-px bg-white text-white"></div>
                    <span className="lg:hidden">Down</span>
                  </div>

                </div>

                <div className="mt-5">
                  <Link href="/"><div className="flex items-center gap-[5px] sm:gap-[18px] group hover:bg-white rounded-[74px] transition duration-300 py-[6px] px-2.5">
                    <div className="flex gap-[2px] items-center bg-white group-hover:bg-black transition duration-300 rounded-[74px] p-[6.2px] pr-3">
                      <div className="w-[22px] h-[22px] block">
                        <Image src={clutchLogo} alt="Clutch Logo" width={22} height={22} />
                      </div>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <div key={index} className=""><Star fill="#FFC149" stroke="0" size={16} /></div>
                        ))}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-black group-hover:text-white transition duration-300">4.9</p>
                      </div>
                    </div>
                    <div>
                      <p className="hidden sm:block text-[#ffffffb3] text-[14px] uppercase group-hover:text-black transition duration-300">Gold Verified</p>
                    </div>
                    <div>
                      <p className="text-[clamp(0.8rem,2vw,1rem)] font-medium group-hover:text-black transition duration-300">Our Customer love to work with us, 40 reviews</p>
                    </div>
                  </div></Link>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-10">
              {/* Links */}
              <div className="hidden lg:block space-y-[18px]">
                {
                  navLinks.map(link => (
                    <li key={link.href} className="list-none text-right">
                      <Link href={link.href} className="font-plus-jakarta-sans text-[15px] hover:text-gray-500 transition duration-300 font-medium">{link.label}</Link>
                    </li>
                  ))
                }
              </div>

              {/* Video */}
              <div className="flex">
                <div className="mt-5 min-[450px]:mt-10 lg:mt-0 relative">
                  <button className={clsx("absolute top-[40%] -right-8 lg:-left-10 lg:-top-10 cursor-pointer bg-white/50 h-[clamp(60px,5vw,90px)] w-[clamp(60px,5vw,90px)] flex justify-center items-center rounded-full", { "hidden": play && play })} onClick={handlePlay}>
                    <Image src={clickToPlay} alt="Click to Play" className="h-[138%] min-w-[138%] animate-spin" style={{ animationDuration: "10s" }} />
                    <Image src={playImg} alt="Play Icon" className="absolute" />
                  </button>

                  {/* Auto Player Video */}
                  <iframe
                    ref={autoPlayerRef}
                    className="hero-video-autoplay h-[clamp(150px,5vw,195px)] w-[clamp(260px,5vw,345px)] lg:h-[230px] lg:w-[405px] rounded-[20px]"
                    title="AWSMD Showreel"
                    src="https://player.vimeo.com/video/823892274?h=fc36315143&autoplay=1&loop=1&muted=1&background=1"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>

                  {/* Main Player Video */}
                  <iframe
                    className={clsx("hero-video-autoplay h-[clamp(150px,5vw,195px)] w-[clamp(260px,5vw,345px)] lg:h-[230px] lg:w-[405px] rounded-[20px]", { "hidden": !autoPlayerRef.current && !play })}
                    title="AWSMD Showreel"
                    src={videoSrc}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
