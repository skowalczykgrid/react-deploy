import Slider from "react-slick";
import FeaturedProductsCard from "./FeaturedProductsCard";
import { useContext, useMemo } from "react";
import { AppContext } from "../../App";
import generateRandomNumbers from "../../utils/generateRandomNumbers";

function FeaturedSlider() {
  const { products } = useContext(AppContext);

  const randomNumbers = useMemo(() => {
    return generateRandomNumbers(products.length, 16);
  }, [products]);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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

export default FeaturedSlider;
