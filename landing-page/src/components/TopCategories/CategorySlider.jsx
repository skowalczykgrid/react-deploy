import { useContext } from "react";
import Slider from "react-slick";
import { AppContext } from "../../App";
import CategoryCard from "./CategoryCard";

function CategorySlider() {
  const { products } = useContext(AppContext);

  const randomNumbers = Array.from({ length: 12 }, () =>
    Math.floor(Math.random() * products.length),
  );

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
  };

  return (
    <div className=" w-[1312px]" id="thirdSlider">
      <Slider {...settings}>
        {randomNumbers.map((randomNumber, index) => {
          return (
            <CategoryCard key={index} product={products[randomNumber]}>
              test
            </CategoryCard>
          );
        })}
      </Slider>
    </div>
  );
}

export default CategorySlider;
