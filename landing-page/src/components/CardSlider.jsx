import Slider from "react-slick";
import FeaturedProductsCard from "./FeaturedProductsCard";
import { useContext } from "react";
import { AppContext } from "../../../App";

// work in progress

function CardSlider({ children, slidesToShow, slidesToScroll, card }) {
  const { products } = useContext(AppContext);

  const randomNumbers = Array.from({ length: 16 }, () =>
    Math.floor(Math.random() * products.length),
  );

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    arrows: false,
  };
  return (
    <div className=" w-[1312px]" id="secondSlider">
      <Slider {...settings}>
        {randomNumbers.map((randomNumber, index) => {
          return (
            <FeaturedProductsCard
              key={index}
              product={products[randomNumber]}
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default CardSlider;
