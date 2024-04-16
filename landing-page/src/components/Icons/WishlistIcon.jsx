import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IconButton from "@mui/material/IconButton";

function WishlistIcon({ color, hoverBgColor }) {
  return (
    <IconButton
      sx={{
        backgroundColor: "transparent",
        color,
        "&:hover": {
          backgroundColor: hoverBgColor,
        },
      }}
    >
      <FavoriteBorderOutlinedIcon />
    </IconButton>
  );
}

export default WishlistIcon;
