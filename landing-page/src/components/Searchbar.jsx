import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import IconButton from "@mui/material/IconButton";

function SearchBar() {
  return (
    <div className="flex w-[324px] items-center justify-between rounded-lg border border-[#E5E0FC] bg-white p-[2px] shadow-md">
      <input
        className="ml-4 w-full bg-transparent font-light text-[#8A8FB9] focus:outline-none"
        placeholder="Search"
      />
      <IconButton
        sx={{
          backgroundColor: "#FB2E86",
          color: "white",
          borderRadius: "8px",
          padding: "6px 14px",
        }}
      >
        <SearchOutlinedIcon />
      </IconButton>
    </div>
  );
}

export default SearchBar;
