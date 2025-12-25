import AnimatedButton2 from "@/components/AnimatedButton2"
import ArrowRight from "@/components/icons/ArrowRight"
import AwsmdTag from "@/components/shared/AwsmdTag"

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

    const graphData = [
        {
            title: "Growth",
            points: [
                "Optimization",
                "Experience",
                "A/B Testing"
            ]
        }, {
            title: "Insights",
            points: [
                "Innovation",
                "User Experience",
                "Visual Design",
                "Development",
            ]
        },
        {
            title: "Product",
            points: [
                "Data Science",
                "UX Research",
                "UX Strategy",
            ]
        }
    ]

    return (
        <section className="about-us pt-[70px]">
            <div className="container px-[15px] lg:px-[25px] xl:px-10 mx-auto">

                {/* Header */}
                <AwsmdTag serial={2} title="About Us" />
                <div className="flex justify-between items-center mt-6 pb-[44px]">
                    <h2 className="text-[clamp(40px,4vw,58px)] leading-none font-medium">We Strive to Innovate</h2>
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
                        <p className="text-[clamp(19px,1.5vw,26px)] text-[#8C8C8C] leading-[clamp(24px,2vw,52px)]">
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
                    <div className="w-full pl-[25px] hidden xl:flex items-end justify-end grow">
                        <div className="w-full max-w-[625px] select-none">
                            <div className="about-us-graph pb-[100%] relative">
                                {/* Main Circle */}
                                <div className="w-full h-full bg-[#F4F4F4] absolute top-0 right-0 rounded-full border border-transparent"></div>

                                {/* First Circle */}
                                <div className="w-[85.4%] h-[85.4%] bg-[#EEEEEE] absolute top-[2.13812%] right-[2.13812%] rounded-full border border-transparent hover:border-[#BEBEBE] transition-colors duration-[0.4s] ease-in-out">
                                    <p className="h-1 w-1 absolute top-[93.3013%] right-[25%] bg-black rounded-full z-10">
                                        <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">A/B Testing</span>
                                    </p>
                                    <p className="h-3 w-3 absolute top-[84.3553%] right-[84.3553%] bg-[#1B76FF] rounded-full z-10">
                                        <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Growth</span>
                                    </p>
                                    <p className="h-1 w-1 absolute top-[54.3578%] right-[99.5097%] bg-black rounded-full z-10">
                                        <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Experience</span>
                                    </p>
                                    <p className="h-1 w-1 absolute top-[25%] right-[93.3013%] bg-black rounded-full z-10">
                                        <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Optimization</span>
                                    </p>
                                </div>

                                {/* Second Circle */}
                                <div className="w-[68.14%] h-[68.14%] bg-[#E1E1E1] absolute top-[4.66579%] right-[4.66579%] rounded-full border border-transparent hover:border-[#BEBEBE] transition-colors duration-[0.4s] ease-in-out">
                                    <p className="h-1 w-1 absolute top-[88.3022%] right-[17.8606%] bg-black rounded-full z-10">
                                        <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Development</span>
                                    </p>
                                    <p className="h-1 w-1 absolute top-[99.5097%] right-[45.6422%] bg-black rounded-full z-10">
                                        <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Visual Design</span>
                                    </p>
                                    <p className="h-3 w-3 absolute top-[84.0553%] right-[84.0553%] bg-[#1B76FF] rounded-full">
                                        <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Insights</span>
                                    </p>
                                    <p className="h-1 w-1 absolute top-[54.3578%] right-[99.3097%] bg-black rounded-full z-10">
                                        <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">User Experience</span>
                                    </p>
                                    <p className="h-1 w-1 absolute top-[32.899%] right-[96.6846%] bg-black rounded-full z-10">
                                        <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Innovations</span>
                                    </p>
                                </div>

                                {/* Third Circle */}
                                <div className="w-[42%] h-[42%] bg-[#F4F4F4] absolute top-[8.4939%] right-[8.4939%] rounded-full border border-transparent hover:border-[#BEBEBE] transition-colors duration-[0.4s] ease-in-out">
                                    <p className="h-3 w-3 absolute top-[12.1447%] right-[12.1447%] bg-[#1B76FF] rounded-full">
                                        <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Product</span>
                                    </p>
                                    <p className="h-1 w-1 absolute top-[82.1394%] right-[11.1978%] bg-black rounded-full z-10">
                                        <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Data Science</span>
                                    </p>
                                    <p className="h-1 w-1 absolute top-[94.7154%] right-[71.1309%] bg-black rounded-full z-10">
                                        <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">UX Research</span>
                                    </p>
                                    <p className="h-1 w-1 absolute top-[50%] right-[99.6000%] bg-black rounded-full z-10">
                                        <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">UX Strategy</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs