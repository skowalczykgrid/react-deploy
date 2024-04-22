import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Button from "@mui/material/Button";

function LatestBlogCard({ imgSrc }) {
  return (
    <article className="group flex h-[475px] w-[416px] flex-col gap-4 rounded-lg shadow-lg transition-all hover:translate-y-[-24px] hover:shadow-2xl">
      <img src={imgSrc} alt="" className="h-[255px] rounded-lg" />
      <div className="flex flex-col gap-4 pl-[18px] ">
        <div className="flex gap-[64px]">
          <p className="text-grey-3 flex items-center gap-2 text-[14px] font-light">
            <EditOutlinedIcon
              fontSize="smaller"
              sx={{ transform: "translateY(-1px)" }}
            />
            Jon Doe
          </p>
          <p className="text-grey-3 font-ligh t flex items-center gap-2 text-[14px]">
            <CalendarMonthOutlinedIcon
              fontSize="smaller"
              sx={{ transform: "translateY(-2px)" }}
            />
            21 August, 2023
          </p>
        </div>
        <h4 className="mt-2 text-base font-semibold text-textPrimary transition-all group-hover:text-primary">
          Top essential Trends in 2023
        </h4>

        <p className="text-grey-3  text-base font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          hendrerit hendrerit ex.
        </p>
        <Button
          variant="text"
          sx={{
            width: "100px",
            textTransform: "none",
            color: "#FB2E86",
            fontWeight: 700,
            fontSize: "16px",
            padding: 0,
          }}
        >
          Read More
        </Button>
      </div>
    </article>
  );
}

export default LatestBlogCard;
