import IconButton from "@mui/material/IconButton";

function EmailInput() {
  return (
    <div className="flex h-10 w-[324px] items-center justify-between rounded-lg border border-[#E5E0FC] bg-white p-[2px] py-5 ">
      <input
        className="ml-4 flex w-full items-center bg-transparent font-light text-[#8A8FB9] placeholder:-translate-y-[-1.5px] focus:outline-none"
        placeholder="Enter Email Address"
      />
      <IconButton
        sx={{
          backgroundColor: "#FB2E86",
          color: "white",
          borderRadius: "6px",
          padding: "11px 16px",
          fontSize: "12px",
          fontWeight: "600",
          height: "36px",

          border: "2px solid #FB2E86",

          "&:hover": {
            color: "black",

            border: "2px solid #FB2E86",
          },
        }}
      >
        Sign up
      </IconButton>
    </div>
  );
}

export default EmailInput;
