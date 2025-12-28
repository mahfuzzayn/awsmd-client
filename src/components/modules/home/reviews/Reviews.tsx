"use client"

import AwsmdTag from "@/components/shared/AwsmdTag"

import clutchTopDesignImg from "@/assets/images/reviews/clutch-top-design-company.png"
import clutchTopFlutterImg from "@/assets/images/reviews/clutch-top-flutter-developer.png"

import review1Img from "@/assets/images/reviews/person-1.jpg"
import review2Img from "@/assets/images/reviews/person-2.jpg"
import review3Img from "@/assets/images/reviews/person-3.jpg"
import review4Img from "@/assets/images/reviews/person-4.jpg"

import Image from "next/image"
import ReviewsCarousel from "./ReviewsCarousel"
import { IReview, IAward } from "@/types"

import "./Reviews.css"
import { useRef } from "react"

const Reviews = () => {
    const reviewsRef = useRef<HTMLDivElement | null>(null);

    const awardsData: IAward[] = [
        {
            image: clutchTopDesignImg,
            alt: "Clutch Top Design Company"
        },
        {
            image: clutchTopFlutterImg,
            alt: "Clutch Top Flutter Developer"
        }
    ]

    const reviewsData: IReview[] = [
        {
            name: "Lexie Ernst",
            designation: "CEO",
            comment: "Awesomed is a hands-on team with applicable advice beyond design. They focus on the end-user and help improve retention. They’re committed to Agile development methods, and they look into user data and user behavior when driving new features. They excel in user experience and big-picture thinking.",
            image: review1Img,
        },
        {
            name: "Lucas Rossi",
            designation: "CEO",
            comment: "Since launching the website, the client has gained around 10,000 subscribers. Awsmd created an appealing and bold design that the client is pleased with. The team manages the project well and delivers on time.",
            image: review2Img,
        },
        {
            name: "Amina Al-Saadi",
            designation: "Project Manager",
            comment: "Awsmd’s professional team achieved results that the client is pleased with. They explained everything clearly, delivered on time, and communicated effectively through email, Slack, and Zoom.",
            image: review3Img,
        },
        {
            name: "Cindy Vincent",
            designation: "Project Manager",
            comment: "The client is delighted with Awsmd's work. The new website increased traffic by 35% and brought in more leads. The Awsmd team consistently met deadlines and communicated well, setting them apart. Additionally, they were highly organized and kept tasks prioritized.",
            image: review4Img,
        }
    ]

    return (
        <section ref={reviewsRef} className="reviews-section pt-10 pb-[30px] lg:py-[70px] xl:pt-[100px] xl:pb-[150px] 2xl:pt-[150px] 2xl:pb-[210px] overflow-hidden">
            <div className="container flex flex-col lg:flex-row mx-auto px-[15px] lg:px-[25px xl:px-10">
                <div className="reviews-left max-w-[255px] flex flex-col">
                    <AwsmdTag serial={6} title="What Our Clients Say" />
                    <p className="hidden lg:block text-[#9e9e9e] text-lg mt-[90px] leading-tight">We supply clients across the entire globe with improved network connections.</p>
                    <ul className="hidden lg:flex mt-auto -mx-[4.5px] pt-[15px]">
                        {
                            awardsData.map((item, index) => (
                                <li key={index} className="max-w-[86px] p-[4.5px] pb-0">
                                    <Image src={item.image} alt={item.alt} className="w-full" />
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="review-right w-full mt-10 lg:mt-0 px-5 lg:pl-20 xl:pl-[133px]">
                    <ReviewsCarousel reviews={reviewsData} />
                </div>
            </div>
        </section>
    )
}

export default Reviews