"use client"

const Focused = () => {
    const text = "Data driven user focused value based";

    return (
        <section className="focused-section overflow-hidden w-full">
            <div className="marquee-container">
                <div className="marquee-content">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className="px-8 inline-flex">
                            <p className="
                                text-[80px] 
                                sm:text-[120px] 
                                md:text-[160px] 
                                lg:text-[200px] 
                                xl:text-[240px] 
                                whitespace-nowrap 
                                font-medium 
                                text-[#2ca8fe]
                                leading-tight
                            ">
                                {text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Focused