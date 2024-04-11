import IconButton from "@mui/material/IconButton";

function EmailInput() {
  return (
    <div className="flex h-10 w-[324px] items-center justify-between rounded-lg border border-[#E5E0FC] bg-white p-[2px] ">
      <input
        className="ml-4 flex w-full items-center bg-transparent font-light text-[#8A8FB9] placeholder:-translate-y-[-2px] focus:outline-none"
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
          transform: "translateY(-0.5px)",
        }}
      >
        Sign up
      </IconButton>
    </div>
  );
}

export default EmailInput;
