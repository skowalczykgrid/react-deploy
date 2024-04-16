import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { useContext, useState } from "react";
import { AppContext } from "../../../App";
import LatestProductsCard from "./LatestProductsCard";

// const randomNumbers = Array.from({ length: 6 }, () =>
//   Math.floor(Math.random() * 145),
// );

//flashing component :(
function LatestProductsTabs() {
  const [tab, setTab] = useState("1");

  const { products } = useContext(AppContext);

  const randomNumbers = Array.from({ length: 6 }, () =>
    Math.floor(Math.random() * products.length),
  );

  const handleChange = (event, newTab) => {
    setTab(newTab);
  };

  return (
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
        <Tab label="New Arrival" value="1" sx={{ textAlign: "center" }} />
        <Tab label="Best Seller" value="2" />
        <Tab label="Featured" value="3" />
        <Tab label="Special Offer" value="4" />
      </Tabs>

      {["1", "2", "3", "4"].map((value, index) => {
        return (
          <TabPanel key={index} value={value}>
            <div className="grid grid-cols-3 grid-rows-2 gap-8">
              {randomNumbers.map((randomNumber, index) => {
                return (
                  <LatestProductsCard
                    key={index}
                    product={products[randomNumber]}
                  />
                );
              })}
            </div>
          </TabPanel>
        );
      })}
    </TabContext>
  );
}

export default LatestProductsTabs;
