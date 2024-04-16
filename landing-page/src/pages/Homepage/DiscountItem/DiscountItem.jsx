import { useState } from "react";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import DoneIcon from "@mui/icons-material/Done";
import Button from "@mui/material/Button";

import headphones from "../../../assets/discount-item/headphones.png";

function DiscountItem() {
  const [tab, setTab] = useState("1");

  const handleChange = (event, newTab) => {
    setTab(newTab);
  };

  return (
    <section className="flex flex-col items-center gap-6 px-[304px] py-[100px]">
      <h2 className="text-[52px] font-bold text-textPrimary ">Discount Item</h2>
      <TabContext value={tab}>
        <Tabs
          onChange={handleChange}
          value={tab}
          centered
          sx={{
            ".MuiTabs-flexContainer": {
              gap: "28px",
            },
            ".MuiTabs-indicator": {
              backgroundColor: "transparent",
            },
            ".MuiTab-root": {
              fontWeight: 400,
              color: "#101750",
              fontSize: "18px",
              textTransform: "none",
            },
            ".Mui-selected": {
              color: "#FB2E86 !important",
            },
          }}
        >
          <Tab label="Headphones" value="1" />
          <Tab label="Laptop" value="2" />
          <Tab label="Other" value="3" />
        </Tabs>

        <TabPanel value="1">
          <div className="flex items-center gap-[80px]">
            <div className="flex max-w-[530px] flex-col gap-6">
              <h3 className="text-[36px] font-bold text-textPrimary">
                20% Discount Of All Products
              </h3>
              <h4 className="text-[22px] font-bold text-primary">
                Headphones Compact
              </h4>
              <p className="text-grey-3 text-[18px] font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
                feugiat habitasse nec, bibendum condimentum.
              </p>

              <ul className="grid grid-cols-2 grid-rows-2 gap-6">
                <li className="text-grey-3 flex gap-4 text-base font-light capitalize">
                  <DoneIcon />
                  Material expose like metals
                </li>
                <li className="text-grey-3 flex gap-4 text-base font-light capitalize">
                  <DoneIcon />
                  Simple neutral colours.
                </li>
                <li className="text-grey-3 flex gap-4 text-base font-light capitalize">
                  <DoneIcon />
                  Clear lines and geomatric figures
                </li>
                <li className="text-grey-3 flex gap-4 text-base font-light capitalize">
                  <DoneIcon />
                  Material expose like metals
                </li>
              </ul>
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "#FB2E86",
                  textTransform: "capitalize",
                  fontSize: "16px",
                  fontWeight: "500",
                  width: "max-content",
                  padding: "16px 40px",
                  borderRadius: "8px",
                  border: "2px solid #FB2E86",
                  height: "52px",

                  "&:hover": {
                    color: "black",

                    border: "2px solid #FB2E86",
                  },
                }}
              >
                Shop Now
              </Button>
            </div>
            <img
              src={headphones}
              alt="headphones"
              className="h-[568px] w-[638px]"
            />
          </div>
        </TabPanel>

        <TabPanel value="2">
          <div className="flex items-center gap-[80px]">
            <div className="flex max-w-[530px] flex-col gap-6">
              <h3 className="text-[36px] font-bold text-textPrimary">
                45% Discount Of All Products
              </h3>
              <h4 className="text-[22px] font-bold text-primary">Laptops</h4>
              <p className="text-grey-3 text-[18px] font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
                feugiat habitasse nec, bibendum condimentum.
              </p>

              <ul className="grid grid-cols-2 grid-rows-2 gap-6">
                <li className="text-grey-3 flex gap-4 text-base font-light capitalize">
                  <DoneIcon />
                  Epic laptop silver color
                </li>
                <li className="text-grey-3 flex gap-4 text-base font-light capitalize">
                  <DoneIcon />
                  Metal material
                </li>
                <li className="text-grey-3 flex gap-4 text-base font-light capitalize">
                  <DoneIcon />
                  Shape of good laptop niceee
                </li>
                <li className="text-grey-3 flex gap-4 text-base font-light capitalize">
                  <DoneIcon />
                  Screen very amazing
                </li>
              </ul>
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "#FB2E86",
                  textTransform: "capitalize",
                  fontSize: "16px",
                  fontWeight: "500",
                  width: "max-content",
                  padding: "16px 40px",
                  borderRadius: "8px",
                  border: "2px solid #FB2E86",
                  height: "52px",

                  "&:hover": {
                    color: "black",

                    border: "2px solid #FB2E86",
                  },
                }}
              >
                Shop Now
              </Button>
            </div>
            <img
              src={headphones}
              alt="headphones"
              className="h-[568px] w-[638px]"
            />
          </div>
        </TabPanel>

        <TabPanel value="3">
          <div className="flex items-center gap-[80px]">
            <div className="flex max-w-[530px] flex-col gap-6">
              <h3 className="text-[36px] font-bold text-textPrimary">
                10% Discount on All Products
              </h3>
              <h4 className="text-[22px] font-bold text-primary">Other</h4>
              <p className="text-grey-3 text-[18px] font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
                feugiat habitasse nec, bibendum condimentum.
              </p>

              <ul className="grid grid-cols-2 grid-rows-2 gap-6">
                <li className="text-grey-3 flex gap-4 text-base font-light capitalize">
                  <DoneIcon />
                  Buy everything you want
                </li>
                <li className="text-grey-3 flex gap-4 text-base font-light capitalize">
                  <DoneIcon />
                  Simple neutral colours.
                </li>
                <li className="text-grey-3 flex gap-4 text-base font-light capitalize">
                  <DoneIcon />
                  Clear lines and geomatric figures
                </li>
                <li className="text-grey-3 flex gap-4 text-base font-light capitalize">
                  <DoneIcon />
                  Made from good material and wood
                </li>
              </ul>
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "#FB2E86",
                  textTransform: "capitalize",
                  fontSize: "16px",
                  fontWeight: "500",
                  width: "max-content",
                  padding: "16px 40px",
                  borderRadius: "8px",
                  border: "2px solid #FB2E86",
                  height: "52px",

                  "&:hover": {
                    color: "black",

                    border: "2px solid #FB2E86",
                  },
                }}
              >
                Shop Now
              </Button>
            </div>
            <img
              src={headphones}
              alt="headphones"
              className="h-[568px] w-[638px]"
            />
          </div>
        </TabPanel>
      </TabContext>
    </section>
  );
}

export default DiscountItem;
