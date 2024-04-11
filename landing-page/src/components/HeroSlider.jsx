import Slider from "react-slick";
import headphones from "../assets/hero-section/headphones.png";
import discount from "../assets/hero-section/Discount.png";

function HeroSlider() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dotsClass: "slick-dots left-[-430px] bottom-[10px]",
  };
  return (
    <div className="relative h-[692px] w-[706px] py-8">
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
