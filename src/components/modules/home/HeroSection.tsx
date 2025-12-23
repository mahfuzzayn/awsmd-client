import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/images/logo.png"
import { ArrowDown, Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import clutchLogo from "@/assets/images/clutch-logo.png"

const HeroSection = () => {
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

  return (
    <section className="hero-section p-3 h-screen">
      <div className="bg-gray-200 px-[19px] pt-2 pb-[30px] rounded-[33px] overflow-hidden relative">
        <div className="relative z-20">
          {/* Hero Header */}
          <header>
            <div className="flex mt-[15px]">

              <Link href="/" className="flex items-center w-[240px] gap-[9px]">
                <Image src={logoImg} alt="Awsmd" width={15} height={15} className="w-[25px] h-[21px]" />
                <h4 className='text-lg font-bold text-white'>Awsmd</h4>
              </Link>

              <ul className="bg-white text-black rounded-[33px] flex px-9 mx-auto">
                {menuLinks.map(link => (
                  <li key={link.href} className="px-5 py-[16px]">
                    <Link href={link.href} className="text-[15px] font-medium">{link.label}</Link>
                  </li>
                ))}
              </ul>

            </div>
          </header>

          {/* Hero Content */}
          <div className="pt-[25px] px-5">
            <div className="hero-content flex justify-between text-white">
              {/* Left Content */}
              <div>
                <div className="font-freigeist-cons text-[120px] tracking-tighter leading-[110px] pb-[25px] uppercase">
                  <h1>We create</h1>
                  <div className="flex items-center gap-4">
                    <div className="cursor-pointer w-[70px] h-[70px] flex items-center justify-center rounded-full bg-white text-black">
                      <ArrowDown />
                    </div>
                    <h1 className="font-bold">
                      <i>A</i>
                      wesome
                    </h1>
                  </div>
                  <div>
                    <h1 className="font-bold">Design
                      <span className="h-[100px] w-[20px] relative top-2 left-2 bg-white inline-block animate-pulse"></span>
                    </h1>
                  </div>
                </div>

                <Separator />

                <div className="mt-[18px]">
                  <Link href="/"><div className="flex items-center gap-[18px] group hover:bg-white rounded-[74px] transition duration-300 py-[6px] px-2.5">
                    <div className="flex gap-[2px] items-center bg-white group-hover:bg-black transition duration-300 rounded-[74px] p-[6.2px] pr-3">
                      <div>
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
                      <p className="text-[#ffffffb3] text-[14px] uppercase group-hover:text-black transition duration-300">Gold Verified</p>
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-black transition duration-300">Our Customer love to work with us, 40 reviews</p>
                    </div>
                  </div></Link>
                </div>
              </div>

              {/* Right Content */}
              <div>

              </div>
            </div>
          </div>
        </div>

        {/* Hero Video */}
        <video className="absolute z-10 top-0 left-0 pointer-event-none" height="100%" width="100%" autoPlay muted loop>
          <source src="./hero.mp4" type="video/mp4"></source>
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
