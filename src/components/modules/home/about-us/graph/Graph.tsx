import "./Graph.css"

const Graph = () => {
    return (
        <div className="about-us-graph w-full pl-[25px] hidden xl:flex items-end justify-end grow">
            <div className="w-full max-w-[625px] select-none">
                <div className="about-us-graph pb-[100%] relative">
                    {/* Main Circle */}
                    <div className="w-full h-full bg-[#F4F4F4] absolute top-0 right-0 rounded-full border border-transparent"></div>

                    {/* First Circle */}

                    {/* Starting Point -> top: top-[84.3553%] right-[84.3553%] */}
                    {/* Ending Point -> Each motion.p's given top and right percent(%) value */}

                    {/* First Circle Box */}
                    <div className="first-circle w-[85.4%] h-[85.4%] bg-[#EEEEEE] absolute top-[2.13812%] right-[2.13812%] rounded-full border border-transparent hover:border-[#BEBEBE] transition-colors duration-[0.4s] ease-in-out">
                        <p
                            className="h-1 w-1 absolute bg-black rounded-full opacity-0 z-10"
                            style={{ top: "93.3013%", right: "25%" }}
                        >
                            <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">A/B Testing</span>
                        </p>
                        <p
                            className="h-3 w-3 absolute bg-[#1B76FF] rounded-full z-10"
                            style={{ top: "84.3553%", right: "84.3553%" }}>
                            <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Growth</span>
                        </p>
                        <p
                            className="h-1 w-1 absolute bg-black rounded-full opacity-0 z-10"
                            style={{ top: "54.3578%", right: "99.5097%" }}>
                            <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Experience</span>
                        </p>
                        <p
                            className="h-1 w-1 absolute bg-black rounded-full opacity-0 z-10"
                            style={{ top: "25%", right: "93.3013%" }}>
                            <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Optimization</span>
                        </p>
                    </div>

                    {/* Second Circle Box */}
                    <div className="second-circle w-[68.14%] h-[68.14%] bg-[#E1E1E1] absolute top-[4.66579%] right-[4.66579%] rounded-full border border-transparent hover:border-[#BEBEBE] transition-colors duration-[0.4s] ease-in-out">
                        <p
                            className="h-1 w-1 absolute bg-black rounded-full opacity-0 z-10"
                            style={{ top: "88.3022%", right: "17.8606%" }}
                        >
                            <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Development</span>
                        </p>
                        <p
                            className="h-1 w-1 absolute bg-black rounded-full opacity-0 z-10"
                            style={{ top: "99.5097%", right: "45.6422%" }}
                        >
                            <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Visual Design</span>
                        </p>
                        <p
                            className="h-3 w-3 absolute bg-[#1B76FF] rounded-full"
                            style={{ top: "84.0553%", right: "84.0553%" }}
                        >
                            <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Insights</span>
                        </p>
                        <p
                            className="h-1 w-1 absolute bg-black rounded-full opacity-0 z-10"
                            style={{ top: "54.3578%", right: "99.3097%" }}
                        >
                            <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">User Experience</span>
                        </p>
                        <p
                            className="h-1 w-1 absolute bg-black rounded-full opacity-0 z-10"
                            style={{ top: "32.899%", right: "96.6846%" }}
                        >
                            <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Innovations</span>
                        </p>
                    </div>

                    {/* Third Circle Box */}
                    <div className="third-circle w-[42%] h-[42%] bg-[#F4F4F4] absolute top-[8.4939%] right-[8.4939%] rounded-full border border-transparent hover:border-[#BEBEBE] transition-colors duration-[0.4s] ease-in-out">
                        <p
                            className="h-3 w-3 absolute bg-[#1B76FF] rounded-full"
                            style={{ top: "12.1447%", right: "12.1447%" }}
                        >
                            <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Product</span>
                        </p>
                        <p
                            className="h-1 w-1 absolute bg-black rounded-full opacity-0 z-10"
                            style={{ top: "82.1394%", right: "11.1978%" }}
                        >
                            <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Data Science</span>
                        </p>
                        <p
                            className="h-1 w-1 absolute bg-black rounded-full opacity-0 z-10"
                            style={{ top: "94.7154%", right: "71.1309%" }}
                        >
                            <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">UX Research</span>
                        </p>
                        <p
                            className="h-1 w-1 absolute bg-black rounded-full opacity-0 z-10"
                            style={{ top: "50%", right: "99.6000%" }}
                        >
                            <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">UX Strategy</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Graph