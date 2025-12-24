import AwsmdTag from "@/components/shared/AwsmdTag"
import service1Img from "@/assets/images/our-services/mob-dev.png"
import service2Img from "@/assets/images/our-services/design-solutions.png"
import service3Img from "@/assets/images/our-services/web-dev.png"
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

interface IService {
    serial: number;
    title: string;
    description: string;
    href: string;
    stacks: string[];
    image: StaticImageData;
}

const OurServices = () => {
    const services: IService[] = [
        {
            serial: 1,
            title: "Mobile App Development",
            href: "/mobile-development",
            description: "Many years of expertise in mobile development allow us to design architecture and create bespoke native applications for Apple iOS and Google Android.",
            stacks: ["Swift", "React Native", "FlutterJS", "Kotlin"],
            image: service1Img,
        },
        {
            serial: 2,
            title: "Solid Design Solutions",
            href: "/design-solutions",
            description: "We're driven by user‑centered design that drives productivity and increases revenue. Our expertise and ingenuity are remarkable, yet we always strive to outdo and outperform our previous achievements.",
            stacks: ["Figma", "Adobe After Effects", "Adobe Illustrator", "Blender", "Cinema 4D"],
            image: service2Img,
        },
        {
            serial: 3,
            title: "Web Development",
            href: "/web-development",
            description: "We build websites that are fast, secure, and user‑friendly. We use the latest technologies and best practices to create websites that meet the needs of our clients and their users.",
            stacks: ["ReactJS", "VueJS", "NodeJS", "Webflow"],
            image: service3Img,
        },
    ]

    return (
        <section className="our-services py-[60px]">
            <div className="container px-[15px] lg:px-[25px] xl:px-[40px] mx-auto">
                <AwsmdTag serial={1} title="Our Services" />
                <div className="mt-6 max-w-[1240px]">
                    <p className="text-[#00000061] text-[clamp(24px,5vw,48px)] leading-[clamp(2rem,5vw,3.5rem)]">As a tight-knit team of experts, we create memorable and emotional websites, digital experiences, and native apps.</p>
                </div>
                <div className="mt-[50px]">
                    <ul className="flex flex-col lg:flex-row gap-1">
                        {services.map((service) => (
                            <li key={service.serial} className="w-full relative overflow-hidden">
                                <Link href={service.href} className="">
                                    <div className={clsx("h-full w-full rounded-[7px] text-white p-[15px]", { "bg-[#E4E3DF]": service.serial === 1 }, { "bg-[#F1AE86]": service.serial === 2 }, { "bg-[#90A6D0]": service.serial === 3 })}>
                                        <div className="relative z-10">
                                            <h2 className="text-[clamp(36px,3vw,48px)] leading-[clamp(2.8rem,5vw,3.5rem)] uppercase">{service.title}</h2>
                                            <p className="text-[14px] lg:text-[16px] mt-[150px] pb-5">{service.description}</p>
                                            <Separator className="bg-white" />
                                            <ul className="flex flex-wrap pt-5">
                                                {service.stacks.map((stack) => (
                                                    <li key={stack} className="bg-[#cac8c0] px-[14.50px] py-0.5 m-0.5 text-[14px] font-medium rounded-[40px]">{stack}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* BG Animated Image */}
                                        <Image src={service.image} className="h-full w-full object-cover absolute top-0 left-0 z-1 service-image" alt={`${service.title} image`} />
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default OurServices