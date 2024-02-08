import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ResponsiveCarouselProps {
  images: string[];
}

const ResponsiveCarousel = ({
  images,
}: ResponsiveCarouselProps): JSX.Element => {
  return (
    <Carousel showThumbs={false} autoPlay>
      {images.map((src, i) => (
        <div key={i}>
          <img src={src} alt="slider" />
        </div>
      ))}
    </Carousel>
  );
};

export default ResponsiveCarousel;
