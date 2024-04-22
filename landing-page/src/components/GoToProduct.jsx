import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";

function GoToProduct({ product, color, hoverBgColor }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <Link to={`/products/${product.id}`} state={{ product }}>
      <IconButton
        onClick={scrollToTop}
        sx={{
          backgroundColor: "transparent",
          color,
          "&:hover": {
            backgroundColor: hoverBgColor,
          },
        }}
      >
        <ZoomInOutlinedIcon />
      </IconButton>
    </Link>
  );
}

export default GoToProduct;
