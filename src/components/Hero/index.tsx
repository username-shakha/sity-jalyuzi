import ResponsiveCarousel from "../ResponsiveCarousel";
import { banner1, banner2, banner3 } from "@/assets";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <ResponsiveCarousel images={[banner1, banner2, banner3]} />
      </div>
    </section>
  );
};

export default Hero;
