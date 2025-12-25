"use client"

import { motion } from "framer-motion"

const Graph = () => {
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
    ];

    return (
        <motion.div
            className="w-full pl-[25px] hidden xl:flex items-end justify-end grow"
            initial="initial"
            whileHover="hover"
        >
            <div className="w-full max-w-[625px] select-none">
                <div className="about-us-graph pb-[100%] relative">
                    {/* Main Circle */}
                    <div className="w-full h-full bg-[#F4F4F4] absolute top-0 right-0 rounded-full border border-transparent"></div>

                    {/* First Circle */}
                    <div className="w-[85.4%] h-[85.4%] bg-[#EEEEEE] absolute top-[2.13812%] right-[2.13812%] rounded-full border border-transparent hover:border-[#BEBEBE] transition-colors duration-[0.4s] ease-in-out">
                        <motion.p
                            className="h-1 w-1 absolute bg-black rounded-full z-10"
                            variants={{
                                initial: { top: '45%', right: '45%', opacity: 0, scale: 0.5 },
                                hover: { top: '93.3013%', right: '25%', opacity: 1, scale: 1 }
                            }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">A/B Testing</span>
                        </motion.p>
                        <motion.p
                            className="h-3 w-3 absolute bg-[#1B76FF] rounded-full z-10"
                            variants={{
                                initial: { top: '45%', right: '45%', opacity: 0, scale: 0.5 },
                                hover: { top: '84.3553%', right: '84.3553%', opacity: 1, scale: 1 }
                            }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        >
                            <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Growth</span>
                        </motion.p>
                        <motion.p
                            className="h-1 w-1 absolute bg-black rounded-full z-10"
                            variants={{
                                initial: { top: '45%', right: '45%', opacity: 0, scale: 0.5 },
                                hover: { top: '54.3578%', right: '99.5097%', opacity: 1, scale: 1 }
                            }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        >
                            <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Experience</span>
                        </motion.p>
                        <motion.p
                            className="h-1 w-1 absolute bg-black rounded-full z-10"
                            variants={{
                                initial: { top: '45%', right: '45%', opacity: 0, scale: 0.5 },
                                hover: { top: '25%', right: '93.3013%', opacity: 1, scale: 1 }
                            }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        >
                            <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Optimization</span>
                        </motion.p>
                    </div>

                    {/* Second Circle */}
                    <div className="w-[68.14%] h-[68.14%] bg-[#E1E1E1] absolute top-[4.66579%] right-[4.66579%] rounded-full border border-transparent hover:border-[#BEBEBE] transition-colors duration-[0.4s] ease-in-out">
                        <motion.p
                            className="h-1 w-1 absolute bg-black rounded-full z-10"
                            variants={{
                                initial: { top: '45%', right: '45%', opacity: 0, scale: 0.5 },
                                hover: { top: '88.3022%', right: '17.8606%', opacity: 1, scale: 1 }
                            }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        >
                            <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Development</span>
                        </motion.p>
                        <motion.p
                            className="h-1 w-1 absolute bg-black rounded-full z-10"
                            variants={{
                                initial: { top: '45%', right: '45%', opacity: 0, scale: 0.5 },
                                hover: { top: '99.5097%', right: '45.6422%', opacity: 1, scale: 1 }
                            }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        >
                            <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Visual Design</span>
                        </motion.p>
                        <motion.p
                            className="h-3 w-3 absolute bg-[#1B76FF] rounded-full"
                            variants={{
                                initial: { top: '45%', right: '45%', opacity: 0, scale: 0.5 },
                                hover: { top: '84.0553%', right: '84.0553%', opacity: 1, scale: 1 }
                            }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        >
                            <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Insights</span>
                        </motion.p>
                        <motion.p
                            className="h-1 w-1 absolute bg-black rounded-full z-10"
                            variants={{
                                initial: { top: '45%', right: '45%', opacity: 0, scale: 0.5 },
                                hover: { top: '54.3578%', right: '99.3097%', opacity: 1, scale: 1 }
                            }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                        >
                            <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">User Experience</span>
                        </motion.p>
                        <motion.p
                            className="h-1 w-1 absolute bg-black rounded-full z-10"
                            variants={{
                                initial: { top: '45%', right: '45%', opacity: 0, scale: 0.5 },
                                hover: { top: '32.899%', right: '96.6846%', opacity: 1, scale: 1 }
                            }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                        >
                            <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Innovations</span>
                        </motion.p>
                    </div>

                    {/* Third Circle */}
                    <div className="w-[42%] h-[42%] bg-[#F4F4F4] absolute top-[8.4939%] right-[8.4939%] rounded-full border border-transparent hover:border-[#BEBEBE] transition-colors duration-[0.4s] ease-in-out">
                        <motion.p
                            className="h-3 w-3 absolute bg-[#1B76FF] rounded-full"
                            variants={{
                                initial: { top: '45%', right: '45%', opacity: 0, scale: 0.5 },
                                hover: { top: '12.1447%', right: '12.1447%', opacity: 1, scale: 1 }
                            }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        >
                            <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Product</span>
                        </motion.p>
                        <motion.p
                            className="h-1 w-1 absolute bg-black rounded-full z-10"
                            variants={{
                                initial: { top: '45%', right: '45%', opacity: 0, scale: 0.5 },
                                hover: { top: '82.1394%', right: '11.1978%', opacity: 1, scale: 1 }
                            }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        >
                            <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Data Science</span>
                        </motion.p>
                        <motion.p
                            className="h-1 w-1 absolute bg-black rounded-full z-10"
                            variants={{
                                initial: { top: '45%', right: '45%', opacity: 0, scale: 0.5 },
                                hover: { top: '94.7154%', right: '71.1309%', opacity: 1, scale: 1 }
                            }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        >
                            <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">UX Research</span>
                        </motion.p>
                        <motion.p
                            className="h-1 w-1 absolute bg-black rounded-full z-10"
                            variants={{
                                initial: { top: '45%', right: '45%', opacity: 0, scale: 0.5 },
                                hover: { top: '50%', right: '99.6000%', opacity: 1, scale: 1 }
                            }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                        >
                            <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">UX Strategy</span>
                        </motion.p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Graph