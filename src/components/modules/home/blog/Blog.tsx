import Arrow45 from "@/components/icons/Arrow45"
import AwsmdTag from "@/components/shared/AwsmdTag"

import blogImg1 from "@/assets/images/blog/syfter.png"
import blogImg2 from "@/assets/images/blog/vvs.png"
import blogImg3 from "@/assets/images/blog/ritilo.png"

import BlogsCarousel from "./BlogsCarousel"

import "./Blog.css"
import { IBlog } from "@/types"

const Blog = () => {
    const blogsData: IBlog[] = [
        {
            title: "UI UX Design And Mobile Development for Fintech App",
            description: "In Syfter App,we made it easy for people to invest into crypto and stock market assets with its user friendly interface and interactive swiping experience",
            image: blogImg1,
            href: "/blog/syfter",
        },
        {
            title: "Mobile App Design and Development for NFT Marketplace",
            description: "We created slick design for nft app that brings nft market right into users smartphone allowing them to trade tokens and share with their friends.",
            image: blogImg2,
            href: "/blog/vvs",
        },
        {
            title: "Modern Design And Development of Ecommerce App",
            description: "Retlify - is an ecommerce app that broadens limits of users and sellers by offering them interactive and innovative shopping experience",
            image: blogImg3,
            href: "/blog/ritilo",
        }
    ]

    return (
        <section className="blog-section bg-[#0d0d0d] relative overflow-hidden pt-[30px] pb-[40px] lg:pt-[130px] lg:pb-[120px]">
            <div className="blog-background hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 opacity-12 flex-col pointer-events-none">
                <span className="block h-[423px] w-[423px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.8))]"></span>
                <span className="block h-[423px] w-[423px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.8))]"></span>
                <span className="block h-[423px] w-[423px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.8))]"></span>
            </div>
            <div className="container mx-auto px-[15px] lg:px-[25px] xl:px-10">
                <AwsmdTag title="Our Portfolio" />
                <div className="flex items-center justify-between">
                    <h2 className="font-plus-jakarta-sans text-white text-[clamp(33px,5vw,48px)] font-medium mt-6 lg:max-w-[210px] leading-tight">Latest Cases</h2>
                    <div className="hidden lg:block">
                        <input placeholder="Search cases..." className="pb-[15px] pr-2 text-white outline-none text-xl font-medium border-b border-white max-w-[250px]" />
                        <button className="cursor-pointer">
                            <Arrow45 />
                        </button>
                    </div>
                </div>

                {/* Blogs Carousel */}
                <div className="mt-10 lg:mt-[60px]">
                    <BlogsCarousel blogs={blogsData} />
                </div>
            </div>
        </section>
    )
}

export default Blog