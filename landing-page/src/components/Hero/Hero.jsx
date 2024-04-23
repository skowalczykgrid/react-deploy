import HeroSlider from "./HeroSlider";
import Button from "@mui/material/Button";

function Hero() {
  return (
    <section className="relative flex h-[760px] justify-center gap-[56px] bg-[#F2F0FF]">
      <img
        src="./assets/hero-section/lamp.png"
        alt="lamp"
        className="absolute left-[70px] top-0 h-[387px] w-[387px]"
      />

      <img
        src="./assets/pink-dot.svg"
        alt=""
        className="absolute bottom-[242px] left-[184px]"
      />

      <div className="relative ml-[260px] flex max-w-[570px] flex-col gap-4 pt-[203px]">
        <h5 className="text-base font-bold text-primary">
          Best Headphones For Your Life....
        </h5>
        <h1 className="text-[52px] font-bold leading-[64px] text-textPrimary">
          New Trendy Collection Headphones
        </h1>
        <p className="text-grey-3 text-base font-light">
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
    </section>
  );
}

export default Hero;
