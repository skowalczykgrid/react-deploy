import Slider from "react-slick";
import Card from "../Homepage/FeaturedProducts/FeaturedProductsCard";
import { useContext } from "react";
import { AppContext } from "../../App";

function ProductRelatedSlider({ category }) {
  const { products } = useContext(AppContext);

  const relatedProducts = products.filter(
    (product) => product.category === category,
  );

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
        {relatedProducts.map((product, index) => {
          return <Card key={index} product={product} />;
        })}
      </Slider>
    </div>
  );
}

export default ProductRelatedSlider;
