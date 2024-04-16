import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";

import Dropdown from "../../../components/Dropdown";

function HeaderUpperBar() {
  return (
    <div className="flex h-12 items-center bg-tertiary px-[304px] text-white">
      <div className="mr-auto flex gap-12">
        <span className="gap flex items-center gap-2">
          <EmailOutlinedIcon fontSize="small" />
          mhhasanul@gmail.com
        </span>

        <span className="gap  flex items-center gap-2">
          <PhoneInTalkOutlinedIcon fontSize="small" />
          (12345)67890
        </span>
      </div>

      <div className="flex gap-6">
        <Dropdown defaultValue="English">
          <MenuItem>English</MenuItem>
          <MenuItem>Polish</MenuItem>
        </Dropdown>

        <Dropdown defaultValue="USD">
          <MenuItem>EUR</MenuItem>
          <MenuItem>PLN</MenuItem>
          <MenuItem>GBP</MenuItem>
        </Dropdown>

        <Button
          sx={{ color: "white", textTransform: "capitalize" }}
          endIcon={<PersonOutlineOutlinedIcon />}
        >
          Login
        </Button>
        <Button
          sx={{ color: "white", textTransform: "capitalize" }}
          endIcon={<FavoriteBorderOutlinedIcon />}
        >
          Wishlist
        </Button>
        <IconButton>
          <ShoppingCartOutlinedIcon sx={{ color: "white" }} />
        </IconButton>
      </div>
    </div>
  );
}

export default HeaderUpperBar;
