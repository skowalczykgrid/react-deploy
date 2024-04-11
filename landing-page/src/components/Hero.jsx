import lamp from "../assets/hero-section/lamp.png";
import pinkDot from "../assets/pink-dot.svg";
import HeroSlider from "./HeroSlider";
import Button from "@mui/material/Button";

function Hero() {
  return (
    <div className="relative flex h-[760px] gap-[56px] bg-[#F2F0FF] ">
      <img
        src={lamp}
        alt="lamp"
        className="absolute left-[70px] top-0 h-[387px] w-[387px]"
      />

      <img
        src={pinkDot}
        alt=""
        className="absolute bottom-[242px] left-[184px]"
      />

      <div className="relative ml-[415px] flex max-w-[570px] flex-col gap-4 pt-[203px]">
        <h5 className="text-base font-bold text-primary">
          Best Headphones For Your Life....
        </h5>
        <h1 className="text-[52px] font-bold leading-[64px] text-textPrimary">
          New Trendy Collection Headphones
        </h1>
        <p className="text-base font-light text-[#8A8FB9]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>

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

      <HeroSlider />
    </div>
  );
}

export default Hero;
