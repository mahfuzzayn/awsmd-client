"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { useState, useEffect } from "react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "./BlogsCarousel.css"

import { A11y } from "swiper/modules"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { IBlog } from "@/types"

// Custom Navigation Component
const CustomNavigation = ({ swiper, children }: { swiper: any, children: React.ReactNode }) => {
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
        <div className="custom-navigation flex items-center">
            <button
                className={`cursor-pointer nav-button prev-button ${isBeginning ? 'disabled' : ''}`}
                onClick={() => swiper?.slidePrev()}
                disabled={isBeginning}
            >
                <ChevronLeft className="text-white" />
            </button>
            {children}
            <button
                className={`cursor-pointer nav-button next-button ${isEnd ? 'disabled' : ''}`}
                onClick={() => swiper?.slideNext()}
                disabled={isEnd}
            >
                <ChevronRight className="text-white" />
            </button>
        </div>
    )
}

const CustomPagination = ({ swiper, slidesCount }: { swiper: any, slidesCount: number }) => {
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        if (swiper) {
            setActiveIndex(swiper.activeIndex)

            swiper.on('slideChange', () => {
                setActiveIndex(swiper.activeIndex)
            })
        }
    }, [swiper])

    return (
        <div className="custom-pagination flex items-center gap-2 mx-[45px]">
            {Array.from({ length: slidesCount }).map((_, index) => (
                <button
                    key={index}
                    className={`pagination-dot cursor-pointer h-1 w-8 bg-[#6A6A6A] rounded-full ${index === activeIndex ? 'active bg-white' : ''}`}
                    onClick={() => swiper?.slideTo(index)}
                />
            ))}
        </div>
    )
}

const BlogsCarousel = ({ blogs }: { blogs: IBlog[] }) => {
    const [swiperInstance, setSwiperInstance] = useState<any>(null);


    return (
        <div className="blogs-carousel-container">
            <Swiper
                onSwiper={setSwiperInstance}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    460: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    528: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                modules={[A11y]}
                className="blogs-carousel"
            >
                {blogs.map((blog, index) => (
                    <SwiperSlide key={index} className="w-full">
                        <div className="blog-slide-item">
                            <Link href={blog.href}>
                                <Image
                                    src={blog.image.src}
                                    alt={blog.title}
                                    className="w-full h-[clamp(240px,20vw,320px)] object-cover rounded-[11px]"
                                    height={500}
                                    width={500}
                                />
                                <div className="mt-[25px] space-y-[9px]">
                                    <h3 className="text-white text-xl font-plus-jakarta-sans font-semibold">{blog.title}</h3>
                                    <p className="text-[#ffffff4d] text-ellipsis">{blog.description}</p>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Blog Carousel Bottom Part */}
            <div className="blog-carousel-bottom flex justify-center lg:justify-between items-center mt-11 lg:mt-20 px-[27.5px] select-none">
                <div className="blog-carousel-controls">
                    {swiperInstance && (
                        <CustomNavigation swiper={swiperInstance}>
                            {swiperInstance && (
                                <CustomPagination swiper={swiperInstance} slidesCount={blogs.length} />
                            )}
                        </CustomNavigation>
                    )}


                </div>
                <Link href="https://awsmd.com/cases" target="_blank" className="hidden lg:block bg-[#404040] py-[4.5px] px-[14.5px] rounded-[50px] text-white text-[17px] tracking-tightk">View All Cases</Link>
            </div>
        </div>
    )
}

export default BlogsCarousel