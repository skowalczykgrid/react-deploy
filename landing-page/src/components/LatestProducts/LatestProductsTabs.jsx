import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { useContext, useMemo, useState } from "react";
import { AppContext } from "../../App";
import LatestProductsCard from "./LatestProductsCard";

function LatestProductsTabs() {
  const [tab, setTab] = useState("1");

  const { products } = useContext(AppContext);

  const newArrivals = useMemo(
    () =>
      products.filter((product) => {
        const date = new Date(product.createdAt);
        return date >= new Date("2023-05-01");
      }),
    [products],
  );

  const randomNewArrivals = useMemo(() => {
    return newArrivals.sort(() => 0.5 - Math.random()).slice(0, 6);
  }, [newArrivals]);

  const bestSellers = useMemo(() => {
    return products
      .slice()
      .sort((a, b) => b.soldTimes - a.soldTimes)
      .slice(0, 6);
  }, [products]);

  const featuredProducts = useMemo(() => {
    const featured = products.filter((product) => product.isFeatured);

    return featured.sort(() => 0.5 - Math.random()).slice(0, 6);
  }, [products]);

  const specialOffers = useMemo(() => {
    const isSpecialOffer = products.filter(
      (product) => product.specialOffer !== null,
    );

    return isSpecialOffer.sort(() => 0.5 - Math.random()).slice(0, 6);
  }, [products]);

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

      <TabPanel value="1">
        <div className="grid grid-cols-3 grid-rows-2 gap-8">
          {randomNewArrivals.map((product, index) => {
            return <LatestProductsCard key={index} product={product} />;
          })}
        </div>
      </TabPanel>
      <TabPanel value="2">
        <div className="grid grid-cols-3 grid-rows-2 gap-8">
          {bestSellers.map((product, index) => {
            return <LatestProductsCard key={index} product={product} />;
          })}
        </div>
      </TabPanel>
      <TabPanel value="3">
        <div className="grid grid-cols-3 grid-rows-2 gap-8">
          {featuredProducts.map((product, index) => {
            return <LatestProductsCard key={index} product={product} />;
          })}
        </div>
      </TabPanel>
      <TabPanel value="4">
        <div className="grid grid-cols-3 grid-rows-2 gap-8">
          {specialOffers.map((product, index) => {
            return <LatestProductsCard key={index} product={product} />;
          })}
        </div>
      </TabPanel>
    </TabContext>
  );
}

export default LatestProductsTabs;
