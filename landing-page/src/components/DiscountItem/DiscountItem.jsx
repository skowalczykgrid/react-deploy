import { useState } from "react";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import DiscountTabPanel from "./DiscountTabPanel";

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
          <DiscountTabPanel
            title="20% Discount Of All Products"
            subtitle="Headphones Compact"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
                feugiat habitasse nec, bibendum condimentum."
            listItems={[
              "Material expose like metals",
              "Simple neutral colours.",
              "Clear lines and geomatric figures",
              "Material expose like metals",
            ]}
            buttonText="Shop now"
          />
        </TabPanel>
        <TabPanel value="2">
          <DiscountTabPanel
            title="40% Discount Of All Products"
            subtitle="Laptop Compact"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
                feugiat habitasse nec, bibendum condimentum."
            listItems={[
              "Epic laptop silver color",
              "Metal material",
              "Shape of good laptop niceee",
              "Screen very amazing",
            ]}
            buttonText="Shop now"
          />
        </TabPanel>
        <TabPanel value="3">
          <DiscountTabPanel
            title="10% Discount Of All Products"
            subtitle="Other"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
                feugiat habitasse nec, bibendum condimentum."
            listItems={[
              "Buy everything you want",
              "Simple neutral colours.",
              "Clear lines and geomatric figures",
              "Made from good material and wood",
            ]}
            buttonText="Shop now"
          />
        </TabPanel>
      </TabContext>
    </section>
  );
}

export default DiscountItem;
