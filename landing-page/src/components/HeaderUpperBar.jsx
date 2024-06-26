import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";

import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

function HeaderUpperBar() {
  return (
    <div className="flex h-12 items-center justify-center bg-tertiary px-[304px]   text-white">
      <div className="flex h-12 w-[1920px] items-center">
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
          <Link to="/cart">
            <IconButton>
              <ShoppingCartOutlinedIcon sx={{ color: "white" }} />
            </IconButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderUpperBar;
