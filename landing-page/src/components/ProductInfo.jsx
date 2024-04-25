import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";

function ProductInfo({ product }) {
  const [tab, setTab] = useState("1");

  const handleChange = (event, newTab) => {
    setTab(newTab);
  };

  return (
    <section className="flex flex-col bg-[#F8F8FD] px-[416px] pt-[64px]">
      <div className="w-[1073px] self-center">
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
      </div>
    </section>
  );
}

export default ProductInfo;
