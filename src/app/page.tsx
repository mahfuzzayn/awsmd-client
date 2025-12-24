import Focused from "@/components/modules/home/Focused";
import HeroSection from "@/components/modules/home/HeroSection";
import OurServices from "@/components/modules/home/OurServices";

const HomePage = () => {
  return (
    <div className="main-layout">
      <HeroSection />
      <Focused />
      <OurServices />
    </div>
  )
}

export default HomePage;