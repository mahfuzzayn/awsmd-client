import AboutUs from "@/components/modules/home/about-us/AboutUs";
import Focused from "@/components/modules/home/Focused/Focused";
import HeroSection from "@/components/modules/home/HeroSection";
import OurServices from "@/components/modules/home/OurServices";

const HomePage = () => {
  return (
    <div className="main-layout">
      <HeroSection />
      <Focused />
      <OurServices />
      <AboutUs />
    </div>
  )
}

export default HomePage;