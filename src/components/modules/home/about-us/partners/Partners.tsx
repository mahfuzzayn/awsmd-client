import "./Partners.css"

import uberImg from "@/assets/images/about-us/partners/uber.svg"
import oracleImg from "@/assets/images/about-us/partners/oracle.svg"
import goFundMeImg from "@/assets/images/about-us/partners/gofundme.svg"
import nutanixImg from "@/assets/images/about-us/partners/nutanix.svg"
import upsideImg from "@/assets/images/about-us/partners/upside.svg"
import intelImg from "@/assets/images/about-us/partners/intel.svg"
import newBalanceImg from "@/assets/images/about-us/partners/new-balance.svg"
import stateFarmImg from "@/assets/images/about-us/partners/statefarm.svg"
import crossLeadImg from "@/assets/images/about-us/partners/crosslead.png"
import voldisImg from "@/assets/images/about-us/partners/voldis.png"
import Image from "next/image"

const Partners = () => {
    const partnersData = [
        {
            name: "Uber",
            image: uberImg,
        },
        {
            name: "Oracle",
            image: oracleImg,
        },
        {
            name: "GoFundMe",
            image: goFundMeImg,
        },
        {
            name: "Nutanix",
            image: nutanixImg,
        },
        {
            name: "Upside",
            image: upsideImg,
        },
        {
            name: "Intel",
            image: intelImg,
        },
        {
            name: "New Balance",
            image: newBalanceImg,
        },
        {
            name: "State Farm",
            image: stateFarmImg,
        },
        {
            name: "CrossLead",
            image: crossLeadImg,
        },
        {
            name: "Voldis",
            image: voldisImg,
        },
    ]

    return (
        <div className="about-us-partners">
            <div className="marquee-wrapper">
                <div className="marquee-container">
                    <div className="marquee-content">
                        <ul className="flex">
                            {partnersData.map((partner) => (
                                <li key={partner.name} className="w-[clamp(158px,20vw,287px)] h-[clamp(110px,20vw,200px)] flex justify-center items-center border border-l-0">
                                    <Image src={partner.image} alt={partner.name} className="w-[clamp(35%,10vw,35%)]" />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="marquee-content">
                        <ul className="flex">
                            {partnersData.map((partner) => (
                                <li key={`${partner.name}-duplicate`} className="w-[clamp(158px,20vw,287px)] h-[clamp(110px,20vw,200px)] flex justify-center items-center border border-l-0">
                                    <Image src={partner.image} alt={partner.name} className="w-[clamp(35%,10vw,35%)]" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners