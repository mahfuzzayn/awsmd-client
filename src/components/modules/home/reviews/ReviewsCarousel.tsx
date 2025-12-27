"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { useState, useEffect } from "react"

import "swiper/css"

import { A11y } from "swiper/modules"
import { IReview } from '@/types'
import Image from 'next/image'
import Quotation from "@/components/icons/Quotation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import ArrowDown from "@/components/icons/ArrowDown"

const CustomNavigation = ({ swiper }: { swiper: any }) => {
    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)

    useEffect(() => {
        if (swiper) {
            setIsBeginning(swiper.isBeginning)
            setIsEnd(swiper.isEnd)

            swiper.on('slideChange', () => {
                setIsBeginning(swiper.isBeginning)
                setIsEnd(swiper.isEnd)
            })
        }
    }, [swiper])

    return (
        <div className="flex gap-10 items-center z-10">
            <button
                className={`w-4 h-4 rounded-full cursor-pointer bg-white/10 border-2 border-white/30 text-black text-xl font-bold flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:border-white/50 pointer-events-all ml-4 ${isBeginning ? 'opacity-30 cursor-not-allowed pointer-events-none' : ''}`}
                onClick={() => swiper?.slidePrev()}
                disabled={isBeginning}
                aria-label="Previous review"
            >
                <ArrowDown className="rotate-90" />
            </button>
            <button
                className={`w-4 h-4 rounded-full cursor-pointer bg-white/10 border-2 border-white/30 text-black text-xl font-bold flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:border-white/50 pointer-events-all mr-4 ${isEnd ? 'opacity-30 cursor-not-allowed pointer-events-none' : ''}`}
                onClick={() => swiper?.slideNext()}
                disabled={isEnd}
                aria-label="Next review"
            >
                <ArrowDown className="-rotate-90" />
            </button>
        </div>
    )
}

const ReviewsCarousel = ({ reviews }: { reviews: IReview[] }) => {
    const [swiperInstance, setSwiperInstance] = useState<any>(null)

    return (
        <div className="relative lg:max-w-[clamp(820px,5vw,1220px)] 2xl:max-w-[1220px]">
            <Swiper
                onSwiper={setSwiperInstance}
                spaceBetween={0}
                slidesPerView={1}
                modules={[A11y]}
                loop={false}
                speed={600}
                effect="fade"
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index} className="relative">
                        <div className="flex">
                            <Quotation className="absolute lg:static top-2 left-0 z-10 text-[#f2f2f2] lg:text-black w-full h-16 max-w-16" />
                            <div className="lg:pl-[30px] xl:pl-[54px] relative z-20">
                                <p className="font-plus-jakarta-sans font-semibold text-[clamp(2em,10vw,2.2em)] leading-tight pb-[60px] lg:pb-[54.5px]">
                                    {review.comment}
                                </p>
                                <div className="flex justify-between border-t border-[#e5e5e5] pt-10">
                                    <div className="flex items-center">
                                        <Image src={review.image} alt={review.name} className="w-[clamp(48px,5vw,78px)] h-[clamp(48px,5vw,78px)] rounded-full" />
                                        <div className="pl-[15px] md:pl-6 space-y-[7px] leading-tight">
                                            <h3 className="text-[clamp(15px,4vw,24px)] font-semibold tracking-tight">{review.name}</h3>
                                            <p className="text-[clamp(7px,3vw,15px)] text-[#7f7f7f] tracking-tight">{review.designation}</p>
                                        </div>
                                    </div>
                                    {swiperInstance && (
                                        <CustomNavigation swiper={swiperInstance} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ReviewsCarousel