import AnimatedButton2 from "@/components/AnimatedButton2"
import Graph from "@/components/modules/home/about-us/graph/Graph"
import ArrowRight from "@/components/icons/ArrowRight"
import AwsmdTag from "@/components/shared/AwsmdTag"
import Partners from "./partners/Partners"

const AboutUs = () => {
    const cardsData = [
        {
            title: "+300",
            description: "We have successfully completed a total of 300+ projects",
            videoSrc: "./videos/about-us/volchek-color.mp4"
        },
        {
            title: "100K",
            description: "We’ve gathered dozens of reviews from the clients and + 100k reviews from their users",
            videoSrc: "./videos/about-us/pruzina-color.mp4"
        },
        {
            title: "+10",
            description: "Years of experience",
            videoSrc: "./videos/about-us/time-color.mp4"
        },
        {
            title: "+280",
            description: "Team members all over the world",
            videoSrc: "./videos/about-us/ball-color.mp4"
        }
    ]

    return (
        <section className="about-us pt-[70px]">
            <div className="container px-[15px] lg:px-[25px] xl:px-10 mx-auto">

                {/* Header */}
                <AwsmdTag serial={2} title="About Us" />
                <div className="flex justify-between items-center mt-6 pb-[25px] sm:pb-[35px]">
                    <h2 className="text-[clamp(23px,4vw,58px)] leading-none font-medium">We Strive to Innovate</h2>
                    <AnimatedButton2 label="Become a Client" className="group hidden md:flex" icon={<ArrowRight className="w-3 h-3" />} />
                </div>

                {/* Horizontal Bar */}
                <div className="relative">
                    <span className="h-px w-full bg-[#CCCCCC] block"></span>
                    <div className="flex justify-between">
                        <span className="h-[15px] w-px bg-[#CCCCCC] block"></span>
                        <span className="h-[15px] w-px bg-[#CCCCCC] block"></span>
                    </div>
                </div>

                {/* About Us Content */}
                <div className="flex py-[33px]">
                    <div className="w-full min-[1280px]:max-w-[650px]">
                        <p className="text-[clamp(16px,1.5vw,26px)] text-[#8C8C8C] leading-[clamp(24px,2vw,52px)]">
                            <span className="text-black">Solid Strategy</span> aligned with business needs and robust data analysis are fundamental ingredients to extract actionable insights
                        </p>
                        <h3 className="mt-[clamp(50px,5vw,95px)] text-[#999796] 2xl:text-lg font-semibold">Some Number About Us</h3>

                        {/* Cards */}
                        <ul className="grid grid-cols-1 min-[360px]:grid-cols-2 mt-5 -mx-[5px]">
                            {cardsData.map((card, index) => (
                                <li key={index} className="m-1">
                                    <div className="min-h-[180px] h-full bg-[#F2F0F0] px-5 py-3 rounded-[30px] overflow-hidden relative">
                                        <div className="w-[clamp(110px,10vw,150px)] h-[clamp(110px,10vw,150px)] absolute -bottom-[30px] -right-[25px] z-1">
                                            <video className="w-full h-full object-cover" autoPlay loop muted>
                                                <source src={card.videoSrc} type="video/mp4" />
                                            </video>
                                        </div>
                                        <div className="relative z-10">
                                            <h4 className="font-plus-jakarta-sans text-[clamp(30px,3vw,42px)] font-bold text-black">{card.title}</h4>
                                            <p className="max-w-[12em] text-[clamp(13px,1vw,14px)] text-[#8C8C8C] leading-[clamp(16px,1vw,18px)]">{card.description}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Graph Section */}
                    <Graph />
                </div>
            </div>

            {/* Partners Section */}
            <Partners />
        </section>
    )
}

export default AboutUs