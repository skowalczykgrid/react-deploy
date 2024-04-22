import Button from "@mui/material/Button";

function UniqueFeatures() {
  return (
    <section className="flex justify-center gap-8 bg-[#F1F0FF]">
      <img
        src="./assets/unique-features/armchair.png"
        alt="armchair"
        className="h-[576px] w-[640px]"
      />
      <div className="mt-[97px] flex max-w-[534px] flex-col gap-12">
        <h3 className="text-[36px] font-bold text-textPrimary">
          Unique Features Of Latest & Trending Poducts
        </h3>

        <ul className="space-y-4">
          <li className="text-grey-3 text-base font-light before:mr-3 before:inline-block before:h-[11px] before:w-[11px] before:rounded-full before:bg-primary">
            All frames constructed with hardwood solids and laminates
          </li>
          <li className="text-grey-3 before:bg-info text-base font-light before:mr-3 before:inline-block before:h-[11px] before:w-[11px] before:rounded-full">
            Reinforced with double wood dowels, glue, screw - nails corner
          </li>
          <li className="text-grey-3 before:bg-success text-base font-light before:mr-3 before:inline-block before:h-[11px] before:w-[11px] before:rounded-full">
            Arms, backs and seats are structurally reinforced
          </li>
        </ul>
        <div className="space-x-4">
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              borderRadius: "8px",
              padding: "16px 40px",
              height: "52px",
              width: "171px",
              backgroundColor: "#FB2E86",
              fontSize: "16px",
              fontWeight600: "600",
            }}
          >
            Add To Cart
          </Button>
          <span className="text-[14px] font-light text-textPrimary">
            B&B Italian Sofa $32.00
          </span>
        </div>
      </div>
    </section>
  );
}

export default UniqueFeatures;
