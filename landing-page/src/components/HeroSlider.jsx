import Slider from "react-slick";
import headphones from "../assets/hero-section/headphones.png";
import discount from "../assets/hero-section/Discount.png";
import "../styles/Sliders.css";

function HeroSlider() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };
  return (
    <div className="relative h-[692px] w-[706px] py-8" id="firstSlider">
      <Slider {...settings}>
        <div className="relative">
          <img src={headphones} alt="headphones" />
          <img
            src={discount}
            alt="discount"
            className="absolute right-8 top-12"
          />
        </div>
        <div>
          <img src={headphones} alt="headphones" />
        </div>
        <div>
          <img src={headphones} alt="headphones" />
        </div>
      </Slider>
    </div>
  );
}

export default HeroSlider;
