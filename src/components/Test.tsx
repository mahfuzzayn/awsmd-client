import { motion } from "framer-motion"

const Test = () => {
    return (
        <>          <motion.p className="h-1 w-1 absolute top-[54.3578%] right-[99.5097%] bg-black rounded-full z-10">
            <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Experience</span>
        </motion.p>
            <motion.p className="h-1 w-1 absolute top-[25%] right-[93.3013%] bg-black rounded-full z-10">
                <span className="absolute -top-[18px] left-[14px] font-semibold whitespace-nowrap transform -translate-y-full duration-[0.4s] ease-in-out">Optimization</span>
            </motion.p></>
    )
}

export default Test