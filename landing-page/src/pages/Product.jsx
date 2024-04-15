import { useState } from "react";
import { useLocation } from "react-router-dom";

import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IconButton from "@mui/material/IconButton";
import DoneIcon from "@mui/icons-material/Done";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";

function Product() {
  const { state } = useLocation();
  const product = state.product;

  const [rating, setRating] = useState(0);
  const [tab, setTab] = useState("1");

  const handleChange = (event, newTab) => {
    setTab(newTab);
  };

  return (
    <main>
      <section className="flex gap-8 px-[304px] py-[100px]">
        <div className="flex flex-col gap-4">
          <img
            src={product.imageSet[0]}
            alt={product.name}
            className="h-[136px] w-[192px] min-w-[192px] rounded-lg object-cover shadow-md"
          />
          <img
            src={product.imageSet[1]}
            alt={product.name}
            className="h-[136px] w-[192px] rounded-lg object-cover shadow-md"
          />
          <img
            src={product.imageSet[2]}
            alt={product.name}
            className="h-[136px] w-[192px] rounded-lg object-cover shadow-md"
          />
        </div>
        <img
          src={product.thumbnail}
          alt={product.name}
          className="h-[438px] w-[528px] rounded-lg object-cover shadow-2xl"
        />

        <div className="ml-[112px] flex flex-col gap-2 pt-10">
          <h3 className="text-[36px] font-bold text-textPrimary">
            {product.category}
          </h3>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newRating) => {
              setRating(newRating);
            }}
          />
          <div className="my-4 space-x-4">
            <span className=" text-base font-light text-textPrimary">
              ${product.price}
            </span>
            <span className="text-base font-light text-primary line-through">
              ${product.wasPrice}
            </span>
          </div>
          <p className="text-base font-light text-[#A9ACC6]">
            {product.description}
          </p>
          <div className="mt-[56px] space-x-[72px]">
            <Button
              sx={{
                backgroundColor: "#FB2E86",
                color: "white",
                textTransform: "none",
                padding: "14px 38px",
                fontWeight: 600,
                fontSize: "16px",
                width: "171px",
                height: "52px",
                border: "2px solid #FB2E86",

                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#101750",
                },
              }}
            >
              Add To Cart
            </Button>
            <IconButton
              sx={{
                backgroundColor: "transparent",
                color: "#101750",
              }}
            >
              <FavoriteBorderOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </section>
      <section className="p bg-[#F8F8FD] px-[416px] pt-[64px]">
        <TabContext value={tab}>
          <Tabs
            onChange={handleChange}
            value={tab}
            sx={{
              ".MuiTabs-indicator": {
                backgroundColor: "#101750",
              },
              ".MuiTab-root": {
                fontWeight: 700,
                color: "#101750",
                fontSize: "26px",
                marginRight: "72px",
                textTransform: "none",
              },
              ".Mui-selected": {
                color: "#101750 !important",
              },
            }}
          >
            <Tab label="Description" value="1" />
            <Tab label="Additonal Info" value="2" />
            <Tab label="Reviews" value="3" />
            <Tab label="Video" value="4" />
          </Tabs>

          <TabPanel value="1" className="flex flex-col gap-8 !pl-0 !pt-12">
            <div className="flex flex-col gap-4">
              <h5 className="text-[22px] font-bold text-textPrimary">
                Varius tempor.
              </h5>
              <p className="text-grey-3 text-base font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
                quam dolor. In dignissim lectus sed nisl tempor, ac porttitor
                libero consectetur. Pellentesque diam dolor, tincidunt nec ante
                congue, tincidunt facilisis tortor. Mauris vitae massa molestie,
                sagittis ligula vel, egestas massa. Phasellus quis sodales
                augue. Donec nec ultricies diam. Integer feugiat odio ut dictum
                viverra. Donec vehicula nisi placerat cursus mollis. Nunc
                aliquam tempor justo, ut sagittis nisi. Mauris ullamcorper quis
                nisl sed dictum. Maecenas quam risus, congue quis accumsan at,
                imperdiet sed lectus. Aliquam in est purus
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="text-[22px] font-bold text-textPrimary">
                More details
              </h5>
              <ul className="space-y-4">
                {product.colors.map((color, index) => {
                  return (
                    <li
                      key={index}
                      className="text-grey-3 flex gap-4 text-base font-light capitalize"
                    >
                      <DoneIcon />
                      {color}
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabPanel>
          <TabPanel value="2">Additonal Info</TabPanel>
          <TabPanel value="3">Reviews</TabPanel>
          <TabPanel value="4">Video</TabPanel>
        </TabContext>
      </section>
    </main>
  );
}

export default Product;
