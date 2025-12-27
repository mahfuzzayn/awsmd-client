import AboutUs from "@/components/modules/home/about-us/AboutUs";
import Banner from "@/components/modules/home/banner/Banner";
import Blog from "@/components/modules/home/blog/Blog";
import Development from "@/components/modules/home/development/Development";
import Focused from "@/components/modules/home/Focused";
import HeroSection from "@/components/modules/home/HeroSection";
import OurPorfolio from "@/components/modules/home/our-portfolio/OurPorfolio";
import OurServices from "@/components/modules/home/OurServices";

const HomePage = () => {
  return (
    <div className="main-layout">
      <HeroSection />
      <Focused />
      <OurServices />
      <AboutUs />
      <Development />
      <OurPorfolio />
      <Banner />
      <Blog />
    </div>
  )
}

export default HomePage;