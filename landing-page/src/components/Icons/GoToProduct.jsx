import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";

function GoToProduct({ product, color, hoverBgColor }) {
  return (
    <Link to={`/products/${product.id}`} state={{ product }}>
      <IconButton
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
